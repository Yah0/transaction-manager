const express = require("express");
const router = express.Router();
const validator = require('validator');
const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');
const moment = require("moment");

const transactions = [];
const accounts = [];

// Generate 5 accounts with unique ids and balance of 0
for (let i = 0; i < 5; i++) {
  const accountId = uuid.v4();
  accounts.push({ id: accountId, balance: 0 });

  let amount = 0;
  while (amount === 0) {
    amount = Math.floor(Math.random() * 21) - 10;
  }

  const transactionId = uuid.v4();
  const createdAt = moment().toISOString();

  transactions.push({
    transaction_id: transactionId,
    account_id: accountId,
    amount: amount,
    created_at: createdAt,
  });
}

router.get("/ping", (req, res) => {
  res.send("pong")
})

router.post('/transactions', (req, res) => {
  const { account_id, amount } = req.body;

  // check if the account exists
  const account = accounts.find((a) => a.id === account_id);
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  // update the account balance
  account.balance += amount;

  // create a new transaction object
  const newTransaction = {
    transaction_id: uuidv4(), // generate a unique id for the transaction
    account_id,
    amount,
    created_at: moment().toISOString(),
  };

  // add the transaction to the array
  transactions.push(newTransaction);

  res.status(200).json({ message: "Transaction successful" });
});

router.get('/transactions', (req, res) => {
  const transactionsArr = transactions.map((transaction) => ({
    transaction_id: transaction.transaction_id,
    account_id: transaction.account_id,
    amount: transaction.amount,
    created_at: transaction.created_at,
  }));

  res.json(transactionsArr);
});

router.get('/transactions/:transactionId', (req, res) => {
  const { transactionId } = req.params;

  if (!validator.isUUID(transactionId)) {
    return res.status(400).json({ message: "transaction_id missing or has incorrect type" });
  }

  // Find the transaction with the given ID
  const transaction = transactions.find(t => t.transaction_id === transactionId);

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  res.status(200).json(transaction);
});

router.get('/accounts/:accountId', (req, res) => {
  const { accountId } = req.params;
  if (!validator.isUUID(accountId)) {
    return res.status(400).json({ message: "account_id missing or has incorrect type" });
  }

 // Find the account with the given ID
 const account = accounts.find(a => a.id === accountId);

 if (!account) {
   return res.status(404).json({ message: 'Account not found' });
 }

 res.status(200).json(account);
})


module.exports = router;
