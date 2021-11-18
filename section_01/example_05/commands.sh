# -> create node project

npm init
# answer yes for all questions
npm init -y

# -> install dependencie and save it in package.json

# -> install axios in a specifc version
# --save-dev => package not necessary in production
# -E => install exactly 0.24.0
npm i --save-dev axios@0.24.0 -E
npm install --save-dev axios@0.24.0 -E

# -> package-lock.json should go to repository
# because it holds the version tested in your machine

# -> package.json
    # "axios": "0.24.0" // only this version
    # // "axios": "^0.24.0" // 0.24.0 or higher
    # // "axios": "~0.24.0" // 0.24 or in proximity

# -> create node_modules by package.json
npm i

# -> create scripts in package.json
  # "scripts": {
  #   "start": "nodemon",
  #   "dev": "nodemon",

# both scripts execute the main file describe in package.json
npm start # start is a default node command
npm run dev # use run because dev is not a default node command
