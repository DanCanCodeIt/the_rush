FROM php:7.4-cli

WORKDIR /app

ADD . .

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

RUN ./composer.phar install


RUN docker-php-ext-install pdo pdo_mysql

ENTRYPOINT [ "php", "-S", "0.0.0.0:8000", "-t", "public" ]