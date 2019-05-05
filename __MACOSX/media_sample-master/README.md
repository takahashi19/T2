# MediaSample

This is a sample project for developers intersted in Elixir and Phoenix framework.

This project is featuring many basic and general topics like below:

* authentication/authorization (ueberauth/guardian)
* social login (Github/Facebook/Twitter)
* internationalization/localization/globalization (gettext/translator)
* REST API (maru)
* master/slave access to database (read_repos)
* transaction (Ecto.Multi)
* many to many relationship (Ecto 2.0)
* pagination (scrivener)
* using memcached as session storage (plug_session_memcached)
* image file upload to S3 (arc)
* send email via SES (mailman)
* sitemap and RSS
* Facebook OGP and Twitter Cards
* ElasticSearch (AWS ElasticSearch Service with AWS Signature Version 4)
* enumerated types/classification value (ex_enum)
* service layer
* database concurrent test
* metaprogramming

## Preface

This project is intended to be used on Mac OS X or Linux (probably available on Windows, unconfirmed).

And following instructions are only for Mac OS X, sorry.

## Usage

First of all, you need to install MySQL.

```bash
brew install mysql
mysql.server start
```

And you need to create db user `myuser` with password `mypass` like below.

```bash
CREATE USER 'myuser'@'localhost' IDENTIFIED by 'mypass';
GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'localhost';
```

After installing MySQL and creating user, you need to configure MySQL database to use `utf8mb4` charset like below:

```bash
# /etc/my.cnf
[client]
default-character-set = utf8mb4

[mysqld]
symbolic-links=0

# ==== InnoDB
innodb_file_format = Barracuda
innodb_file_format_max = Barracuda
innodb_large_prefix = 1

character-set-server = utf8mb4
skip-character-set-client-handshake
```

And restart MySQL

```bash
mysql.server restart
```

Next, you need to install memcached (for session storage).

```bash
brew install memcached

# auto start settings, optional.
mkdir -p ~/Library/LaunchAgents
ln -sfv /usr/local/opt/memcached/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.memcached.plist

# check
telnet localhost 11211
```

Next, you need to install ElasticSearch (for full text search).

```bash
# Download ElasticSearch's newest zip file from download page.
# https://www.elastic.co/downloads/elasticsearch

# And unzip it under `~/tools` directory. (Assume that you downloaded version 2.3.2)

# if you want to use Japanese, install kuromoji plugin
~/tools/elasticsearch-2.3.2/bin/plugin install analysis-kuromoji

# edit config file
vi ~/tools/elasticsearch-2.3.2/config/elasticsearch.yml

  # use unique cluster name
  cluster.name: kenta.katsumata

# start in the background
~/tools/elasticsearch-2.3.2/bin/elasticsearch -d

# test
curl http://localhost:9200/
```

After that, you can start this app like below:

```bash
# Install dependencies
mix deps.get

# Create and migrate your database
mix ecto.create && mix ecto.migrate

# Insert initial data
mix run priv/repo/seeds.exs

# Install Node.js dependencies
npm install

# Start Phoenix endpoint
mix phoenix.server
```

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

And you can login to [`admin page`](http://localhost:4000/en/admin) by user `admin01@example.com` password `1234`.

## Environment variables

If you want to use guardian, social login, SES email, ElasticSearch(AWS ElasticSearch Service), you need to set environment variables like below:

```bash
# ~/.bash_profile
export MEDIA_SAMPLE_GUARDIAN_SECRET_KEY=your_random_value

export MEDIA_SAMPLE_GITHUB_CLIENT_ID=your_client_id
export MEDIA_SAMPLE_GITHUB_CLIENT_SECRET=your_client_secret

export MEDIA_SAMPLE_FACEBOOK_CLIENT_ID=your_client_id
export MEDIA_SAMPLE_FACEBOOK_CLIENT_SECRET=your_client_secret

export MEDIA_SAMPLE_TWITTER_CLIENT_ID=your_client_id
export MEDIA_SAMPLE_TWITTER_CLIENT_SECRET=your_client_secret

export MEDIA_SAMPLE_EMAIL_SERVER=ses_server
export MEDIA_SAMPLE_EMAIL_USER=ses_smtp_user
export MEDIA_SAMPLE_EMAIL_PASSWORD=ses_smtp_password
export MEDIA_SAMPLE_EMAIL_SENDER=ses_email

export MEDIA_SAMPLE_ELASTICSEARCH_URL=elastic_search_url

# Following environment variables are for AWS ElasticSearch Service.
# If you use local ElasticSearch, these variables are not required.
export MEDIA_SAMPLE_ELASTICSEARCH_ACCESS_KEY_ID=aws_access_key_id
export MEDIA_SAMPLE_ELASTICSEARCH_SECRET_ACCESS_KEY=aws_secret_access_key
export MEDIA_SAMPLE_ELASTICSEARCH_REGION=aws_region
```

And you need to load:

```bash
source ~/.bash_profile
```

## Locale

This project supports locales `en` and `ja` (`en` is default), [`localhost:4000/en`](http://localhost:4000/en) and [`localhost:4000/ja`](http://localhost:4000/ja)

If you access to [`localhost:4000`](http://localhost:4000) without specifing any locale, locale is automatically decided by your browser settings and you'll be redirected.

Initial data are only for English, if you want to make `ja` locale data, you need to change locale to `ja` and create or update record.

## Create ElasticSearch Index

You can create ElasticSearch index and import data from your database like below:

```bash
# iex
MediaSample.Search.create_index
MediaSample.Search.import_documents

# compiled package
bin/media_sample rpc Elixir.MediaSample.Search create_index
bin/media_sample rpc Elixir.MediaSample.Search import_documents
```

`MediaSample.Search.create_index/0` function do both `create` and `delete` index operation. You can call only `delete` index operation like below:

```bash
# iex
MediaSample.Search.delete_index

# compiled package
bin/media_sample rpc Elixir.MediaSample.Search delete_index
```

## API

You can call some APIs like below:

```bash
# get JWT token
curl -d "email=user01%40example%2ecom&password=12345678" http://localhost:4000/en/api/v1/session/create
# => {"jwt":"hogehoge"}

# call entry save API with JWT token
curl -v -H "Authorization: Bearer hogehoge" \
-H "Accept: application/json" -H "Content-type: application/json" \
-X POST -d '{"title":"entry 01", "description":"entry 01 description", "status":1, "category_id":1, "tags":[1, 2], "sections":[{"section_type":1, "content":"section 01", "seq":1, "status":1}]}' \
http://localhost:4000/en/api/v1/mypage/entry/save

# full text search (with ElasticSearch)
curl http://localhost:4000/en/api/v1/entries/search?words=goromaru%20messi
```

## TODO

- [ ] resolve logger problem (logger and lager)
