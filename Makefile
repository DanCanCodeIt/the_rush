run-dev:
	docker-compose -f docker-compose-prod.yml up -d
	docker-compose -f docker-compose-prod.yml exec api php artisan migrate:refresh --seed

build-dev:
	docker-compose -f docker-compose-prod.yml build --no-cache