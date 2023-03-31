const express = require("express");
const router = express.Router();

const transactions = [];

router.get("/ping", (req, res) => {
  res.send("pong")
})

router.post('/transactions', (req, res) => {
  res.send("transactions")
  const { account_id, amount } = req.body;

  // create a new transaction object
  const newTransaction = {
    account_id,
    amount,
  };

  // add the transaction to the array
  transactions.push(newTransaction);

  res.status(200).json({ message: "Transaction successful" });
});

router.get('/transactions/:transactionId', (req, res) => {
  res.send(req.params)
})

router.get('/transactions/:accountId', (req, res) => {
  res.send(req.params)
})


module.exports = router;
