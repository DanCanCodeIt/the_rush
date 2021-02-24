FROM php:7.4-cli

WORKDIR /app

RUN docker-php-ext-install pdo pdo_mysql

ENTRYPOINT [ "php", "-S", "0.0.0.0:8000", "-t", "public" ]