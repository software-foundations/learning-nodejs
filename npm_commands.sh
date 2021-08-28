node -v
npm -v

npm i loadash # locally

# -> install nodemon and save it in package.json
# https://stackoverflow.com/questions/28517494/nodemon-not-found-in-npm
npm install nodemon --save-dev

# Try to check installed global packages npm list -g --depth=0. 
# If you will not find nodemon, - install it with flag -g or --save-dev.
# Don't install nodemon with flag --save, 
# because nodemon uses only for development

# -> global
sudo npm i -g nodemon