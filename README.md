# [Ethereum Assignment]

[![Build Status](dev)

> ### API spec.


This repo is functionality complete

# Getting started

To deploy the contracts locally:

- `truffle compile` -  compiles contract

- `truffle develop` - Run the command To set up local network which creates Ten test accounts 

- `deploy` - Deploys smart contracts to the network

Test Network Deployment : 

`Rinkeby` -  0x7Db8A920bD8092c075C256cf3A572AB0fADb08c2

To get the server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `node app.js` to start the script file , To start the script file locally Replace the   Rinkeby Provider with local http Provider

# Code Overview

## Dependencies

- `web3` -  library that interacts with local or Remote ethereum node using HTTP,IPC or WebSocket.

- `@truffle/hdwallet-provider` - wallet provider to deploy smart contract to Public network

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `model/` - This folder contains the schema definitions for our Mongoose models.


## API EndPoints


1. Mint Token Method 

   This api Mint tokens to the account.

   localhost:7000/script/Mint





2. Get Balance

   This api fetches the token balance of the account

   localhost:7000/script/getbalance/:Id





3. transfer token

   This api transfers tokens from one account to another account

   localhost:7000/script/transfer





4. approve tokens

   This api gives an approval to spender to spend the tokens on behalf

   localhost:7000/script/approve





5. Get all Transactions

   This api fetches all the transactions from the storage 

   localhost:7000/script/getAll





6. Get Transaction Details by Transaction Hash

   Fetches the transaction of the given transaction Hash

   localhost:7000/script/getByHash/:Id







