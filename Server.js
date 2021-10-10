const express = require("express");
const mongoose = require("mongoose");
const {uri} = require('./connectionString')
const fs = require('fs')
const app = express();
const db = mongoose.connect(uri);
const path = require('path')
const userRouter = express.Router();
const port = process.env.PORT || 3000;
const User = require("./models/userModel");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

userRouter
  .route("/users")
  .post((req, res) => {
    const user = new User(req.body);
    user.save();
    return res.status(201).json(user);
  })
  .get((req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        return res.send(err);
      }
      return res.json(users);
    });
  });


userRouter
  .route("/users/:userId")
  .delete((req, res) => {
    User.deleteOne({"_id": `${req.params.userId}`}, (err) => {
      if (err) {
        return res.send(err);
      }
      return res.json({"Success": "true"});
    });
  })
  .patch((req, res) => {
    User.updateOne({"_id": `${req.params.userId}`}, req.body, (err, result) => {
      if (err) {
        return res.send(err);
      }
      else{
        return res.json(result)
      }
    })
  })
  .post((req, res) => {
    User.updateOne({"_id": `${req.params.userId}`}, req.body, (err, result) => {
      if (err) {
        return res.send(err);
      }
      else{
        return res.json(result)
      }
    })
  })
  .put((req, res) => {
    User.replaceOne({"_id": `${req.params.userId}`}, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        profession: req.body.profession,
        hasDegree: req.body.read || false
    }, (err, result) => {
      if(err) {
        res.send(err)
      }
      else {
        res.json(result)
      }
    })
  })
  .get((req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
          return res.send(err);
        }
        if (user) {
          return res.json(user)
        }
        return res.sendStatus(404);
      });
    });
app.use((req, res, next) => {
    fs.appendFile(
        path.join(__dirname, 'log.txt'), 
        `Reqest Ip: ${req.ip} at ${new Date().toTimeString().substr(0, 8)}\n`,
        'utf-8',
        (err) => {
        if(err) {
            return err
        } else {
            return
        }
    })
    next()
})
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

