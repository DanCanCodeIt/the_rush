import { useEffect, useState } from 'react';
import './App.css';
import TableHeader from './components/TableHeader'
import PlayerRow from './components/PlayerRow'
import axios from 'axios'
import Paginator from './components/Paginator';

function App() {
  const headings = ["Name", "Team", "Pos", "Att/G", "Att", "Yds", "Avg", "Yds/G", "TD", "Lng", "1st", "1st %", "20+", "40+", "FUM"];
  const codes = ["player", "team", "pos", "att_g", "att", "yds", "avg", "yds_g", "td", "lng", "first", "first_percent", "twenty_plus_rush", "fourty_plush_rush", "fum"];

  const [page, setPage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [searchName, setSearchName] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState({});

  useEffect(() =>  {
    if (!loading) return;

    const playersUrl = '/api/players/';

    const queryParams = {
      'name': searchName ? searchName: null,
      'sort_by': sortBy ? sortBy : null,
      'page': page
    };

    axios.get(playersUrl, {
      params: queryParams
    })
    .then(resp => {
      setPlayers(resp.data.data);
      setLoading(false);
      setPaginationData({
        nextPageUrl: resp.data.next_page_url,
        prevPageUrl: resp.data.prev_page_url,
        currentPage: resp.data.current_page
      });
    });
  })

  function getHeading() {
    let output = [];
    for (let i=0; i<headings.length; i++) {
      output.push(<TableHeader sortFunc={triggerSort} update heading={headings[i]} index={i} key={i} />)
    }
    return output;
  }

  function getPlayers() {
    let output = [];
    for (let i=0; i<players.length; i++) {
      output.push(<PlayerRow player={players[i]} key={i}/>)
    }
    return output;
  }

  function submitSearchName(e) {
    let text = document.getElementById("name").value;
    if (page > 1) setPage(1);
    if (sortBy) setSortBy(null);
    setLoading(true);
    setSearchName(text);
  }

  function triggerSort(index) {
    if (page > 1) setPage(1);
    setLoading(true);
    setSortBy(codes[index]);
  }

  function setPageAction(page) {
    setLoading(true);
    setPage(page);
  }


  return (
  <div>
    <div className="form">
      <input type="text" placeholder="name" name="name" id="name"></input>
      <input type="submit" value="submit" onClick={submitSearchName}></input>
    </div>

    <div>
      <table>
        <thead>
        <tr>
          {getHeading()}
        </tr>
        </thead>
        <tbody>
          {getPlayers()}
        </tbody>
      </table>
      <Paginator onChange={setPageAction} currentPage={paginationData.currentPage} nextPageUrl={paginationData.nextPageUrl} prevPageUrl={paginationData.prevPageUrl}/>
    </div>
  </div>
  );
}

export default App;
