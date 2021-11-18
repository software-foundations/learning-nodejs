node -v
npm -v

# udpate npm
npm i loadash # locally

# -> install nodemon and save it in package.json
# https://stackoverflow.com/questions/28517494/nodemon-not-found-in-npm
npm install nodemon --save-dev

# Try to check installed global packages npm list -g --depth=0. 
# If you will not find nodemon, - install it with flag -g or --save-dev.
# Don't install nodemon with flag --save, 
# because nodemon uses only for development

# -> global
# sudo npm - -g <package_name>
sudo npm i -g nodemon

# initialize node project
npm init
npm init -y

# -> install axios package and save it in package.json
npm i --save axios

# -> install axios in a specifc version
# --save-dev => package not necessary in production
# -E => install exactly 0.24.0
npm i --save-dev axios@0.24.0 -E
npm install --save-dev axios@0.24.0 -E

