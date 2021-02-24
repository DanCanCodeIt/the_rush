import React from 'react';


function PlayerRow(props) {
  const {player} = props;
  return (
    <tr>
      <td>{player.player}</td>
      <td>{player.team}</td>
      <td>{player.pos}</td>
      <td>{player.att_g}</td>
      <td>{player.att}</td>
      <td>{player.yds}</td>
      <td>{player.avg}</td>
      <td>{player.yds_g}</td>
      <td>{player.td}</td>
      <td>{player.lng}</td>
      <td>{player.first}</td>
      <td>{player.first_percent}</td>
      <td>{player.twenty_plus_rush}</td>
      <td>{player.fourty_plush_rush}</td>
      <td>{player.fum}</td>
    </tr>
  );
}


export default PlayerRow;