#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
  CREATE USER "orcamento_user" WITH PASSWORD 'orcamento_user_pass';
EOSQL

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
  CREATE DATABASE "orcamento" OWNER "orcamento_user";
  GRANT ALL PRIVILEGES ON DATABASE "orcamento" TO "orcamento_user";
EOSQL
