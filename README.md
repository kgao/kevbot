# kevbot

A human like conversation robot connected with slack api.


###Get Start

To start, you will need to install superscript from NPM and init a new bot, this has been updated to be even easer.

  ```
  $ npm install
  ```

Then you can tests this by compiling the topics and running the bot.

  ```
  $ parse
  $ node server
  ```

To clean up the old topics from mongo db:
  ```
  parse -f
  node cleanup.js
  rm -rf telnetFacts/*
  rm -rf systemDB/*
  rm -rf botfacts/*
  node telnet.js
  ```
