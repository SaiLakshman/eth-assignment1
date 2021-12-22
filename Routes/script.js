const express = require("express");
const router = express.Router();
const app = express();

const { ReturnDocument } = require("mongodb");
var mongoose = require('mongoose');
const MessageSchema = mongoose.model('Message');

const Web3 = require('web3');
const { Contract } = require('web3-eth-contract');
const token     = require ("../build/contracts/Token.json");
const Provider = require('@truffle/hdwallet-provider');

const privateKey = "1dfe7a3d5f6790c32ade559b1863c70a89113dcd9a550372b976ab10115b137a";




const init = async () => {

    
    const provider = new Provider(privateKey,"https://rinkeby.infura.io/v3/363d85f74ab4447092870aa4086a1233");

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();

    const myContract = new web3.eth.Contract(
            token.abi,
            token.networks[networkId].address
    );
    
    const addresses = await web3.eth.getAccounts();

   
   // balance Of

    router.get("/getbalance/:Id", async (req, res) => {
        var Id = req.params.Id
        var balance = await myContract.methods.balanceOf(Id).call();
        console.log(balance);
        res.send({balance: balance});

    });


   // mint tokens

router.post("/Mint", async (req, res) => {
    var Id = req.body.Id
    var Id1 = req.body.Id1

    var result1 = await myContract.methods.Mint(Id,Id1).send( {
        from : addresses[0],
        gas:1000000
    });

    var newMessage = new MessageSchema();
        
        newMessage.eventName = "mint";
        newMessage.recipient = req.body.Id;
        newMessage.amount = req.body.Id1;
        newMessage.hash = result1.transactionHash
        newMessage.data = result1;
        
    newMessage.save().then(function() {

      return res.json(result1)
    })

});

// approve tokens


router.post("/approve", async (req, res) => {
    var Id = req.body.Id
    var Id1 = req.body.Id1

    var result2 = await myContract.methods.approve(Id,Id1).send( {
        from : addresses[0],
        gas:1000000
    });

    var newMessage = new MessageSchema();
        
        newMessage.eventName = "approve";
        newMessage.recipient = req.body.Id;
        newMessage.amount = req.body.Id1;
        newMessage.hash = result2.transactionHash
        newMessage.data = result2;
        
    newMessage.save().then(function() {

      return res.json(result2)
    })

});


// transfer tokens

router.post("/transfer", async (req, res) => {
    var Id = req.body.Id
    var Id1 = req.body.Id1

    var result3 = await myContract.methods.transfer(Id,Id1).send( {
        from : addresses[0],
        gas:1000000
    });

    var newMessage = new MessageSchema();
        
        newMessage.eventName = "transfer";
        newMessage.recipient = req.body.Id;
        newMessage.amount = req.body.Id1;
        newMessage.hash = result3.transactionHash
        newMessage.data = result3;
        
    newMessage.save().then(function() {

      return res.json(result3)
    })

});


// get tx by hash


router.get("/getByHash/:Id", async (req, res) => {


    MessageSchema.find({hash:req.params.Id}).then(function (result) {
        if (typeof result == 'undefined') {
            return res.status(404).send({ status: false, message: "No Transaction find" })
        }
        return res.status(200).send(result)
    })
})


// get all transactions


router.get("/getAll", async (req, res) => {
    MessageSchema.find({}).then(function (result) {
        if (typeof result == 'undefined') {
            return res.status(404).send({ status: false, message: "No Transaction find" })
        }
        return res.status(200).send(result)
    })
})



}



init();

module.exports = router;
