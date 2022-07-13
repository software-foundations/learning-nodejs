# Install Postgresql

# Setup project

- <a href="https://github.com/cod3rcursos/knowledge">Repository</a>

```bash
cd ..
git clone git@github.com:cod3rcursos/knowledge.git
cp knowledge/versao-inicial/backend root/project/folder
```

# Install packages

```bash
npm i
```

# Install knex

```bash
npm install knex --save
npx knex --version
```

# Install postgresql

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql@14-main
sudo systemctl enable postgresql.service
sudo systemctl status postgresql.service
psql --version
```

# Creating Database

```bash

# -> Enter in interactive console with postgres user
psql -i -u postgres
psql

# -> List databases
\l

# -> Create database
CREATE DATABASE knowledge;

# -> Connect to the database
\c knowledge
```

# Creating tables

```bash
# -> List tables
\dt
```

# Init knex

```bash
npx knex init
```

# Edit knexfile.js

```javascript
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
```

# Create knex migrations

- They are responsible for create tables

```bash
npx knex migrate:make create_table_users
npx knex migrate:make create_table_categories
npx knex migrate:make create_table_articles
```
# consign

- To inject dependencies