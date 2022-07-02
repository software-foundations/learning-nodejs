# Install nvm

```bash
nvm install --lts
# or
nvm install 16.15.1
```

#  Install node

```bash
nvm alias default 16.15.1
nvm use 16.15.1
npm init -y
```

# Install dependencies

- <code>--save</code> or <code>-P</code> to production
- <code>-g</code> or <code>-P</code> to global
- <code>--save-dev</code> or <code>-D</code> to production

```bash
npm install --save express
```

# Install launchers

```bash
npm install --save-dev nodemon
npm install --save pm2
# or
npm install -g pm2
```

# Start application

```bash
npm start
npm run start
npm run production
```

# Monitoring application

```bash
pm2 status
pm2 log
pm2 monit
pm2 show <id>
```

# Managing application

```bash

# restart application
pm2 restart <id>
pm2 stop <id> ; pm2 start <id>

# delete some applications
pm2 delete <id>

# kill pm2 instance
pm2 kill

```

# Tips

- The two above are similars
- <code>app.use(url, callbacks)</code>
- <code>app.all(url, callbacks)</code>

- This allow only a http verb
- <code>app.httpVerb(url, callbacks)</code>