# MBOT

### Documentation for the ChatBot

# Table Of Contents

1. [Installation](#installation)
2. [Run server](#run-server)
3. [How it works?](#how-it-works)
4. [Payloads](#payloads)

## Installation

1. Clone this repo
2. Open working directory of this project
3. Install Nodejs >=v12.0
4. Run Below command

```
$ npm i
```

## Run Server

_For the Development environment,it uses nodemon to auto run server on save._

```
$ npm run devStart
```

_For the production just run this._

```
$ npm start
```

Server is up and running on port provided in the **.env** file.

## How it works?
<p style="color:green">This bot does not understands any words just a button based bot,
According to the Bot requirements it was built.
But this architecture can be extended for user typing also,
I have added typing keyboard in UI and connected with it javascript also, so that typed message will be send to the server.
As currently typing feature is not necessary so commented its code in index.html,
Typing feature requires NLP intent classification ,previously I have implemented it using  
<a href="https://www.npmjs.com/package/node-nlp">node-nlp</a> module, later removed it and built dialog-management without nlp.
</p>
<h3>Dialog-management</h3>
<p style="color:black;font-size:1.15rem;">
<ol>
<li>
<h4 style="color:orange">User Clicks Button</h4>
<p>Whenever user clicks a button the data-payload as "/intentname" will be sent to server,<br>
<strong>eg: /main.sales.consolidated.today</strong> here this intent speaks about itself that under the main go to consolidated sales of today.
</p>
</li>

<li>
<h4 style="color:orange">Responding to the intent</h4>
<p>In server that particular intent received will be first checked in the actions,if it is their and it will execute that action folder by recursively loading all modules in that folder.<br>
If their is no action then it will check it in the responses.js
And execute that response.
<h4><u>What are actions & responses?</u></h4>
Actions are the dynamic responses such as querying DB or API and sending that response.
Where as the responses are the static responses.
<strong>eg: "/greetings.welcome" is a static welcome message with some buttons,
"/main.sales" with some static options,
"/main.sales.consolidated" with some static options like today,yesterday..,</strong>
</p>
</li>
</ol>
</p>


## Payloads


