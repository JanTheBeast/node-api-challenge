const express = require("express")

const actionsDB = require("../data/helpers/actionModel")
const accountsDB = require("../data/helpers/accountModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  accountsDB.get()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your accounts", err })
    })
})

router.post("/", (req, res) => {
  accountsDB.insert(req.body)
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your account", err })
    })
})

router.get("/:id/", (req, res) => {
  accountsDB.get(req.params.id)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your account", err })
    })
})

router.put("/:id", (req, res) => {
  accountsDB.update(req.params.id, req.body)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your account", err })
    })
})

router.delete("/:id", (req, res) => {
  accountsDB.remove(req.params.id, req.body)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your account", err })
    })
})

// router.get("/:id/actions", (req, res) => {
//   accountsDB.getaccountActions(req.params.id)
//     .then(actions => {
//       res.status(200).json(actions)
//     })
//     .catch(err => {
//       res.status(500).json({ message: "something went wrong getting your account actions", err })
//     })
// })

module.exports = router
