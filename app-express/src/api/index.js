const express = require("express");
const router = express.Router();
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');
const moment = require("moment");

const transactions = [];
const accounts = [];

router.get("/ping", (req, res) => {
  res.send("pong")
})

router.post('/transactions', (req, res) => {
  const { account_id, amount } = req.body;

  // Parse the amount to a number
  const parsedAmount = Number(amount);

  if (!account_id || typeof account_id !== 'string') {
    return res.status(400).json({ errors: ["account_id must be a valid UUID v4"] });
  }

  if (!amount || typeof parsedAmount !== 'number') {
    return res.status(400).json({ errors: ["Amount must be a number, and not 0"] });
  }

  // Check if the HTTP method is allowed
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Specified HTTP method not allowed.' });
  }

  // Check if the content type is allowed
  if (!req.is('json')) {
    return res.status(415).json({ message: 'Specified content type not allowed.' });
  }

  // find the account
  const account = accounts.find((account) => account.account_id === account_id);

  if (!account) {
    // create a new account with the balance from the request
    accounts.push({ account_id, balance: parsedAmount });
  } else {
    // update the balance of the existing account
    account.balance = account.balance + parsedAmount;
  }

  // create a new transaction object
  const newTransaction = {
    transaction_id: uuidv4(), // generate a unique id for the transaction
    account_id,
    amount: parsedAmount,
    created_at: moment().toISOString(),
  };

  // add the transaction to the array
  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});

router.get('/transactions', (req, res) => {
  const transactionsArr = transactions.map((transaction) => ({
    transaction_id: transaction.transaction_id,
    account_id: transaction.account_id,
    amount: transaction.amount,
    created_at: transaction.created_at,
  }));

  res.status(200).json(transactionsArr);
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
  const account = accounts.find(a => a.account_id === accountId);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  res.status(200).json(account);
})


module.exports = router;
