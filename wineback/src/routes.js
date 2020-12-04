const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const con = require("./db");

router.get("/", (req, res) => {
  res.send("This boilerplate is working!");
});

router.post("/register", middleware.validateUserData, (req, res) => {
  const email = req.body.email.toLowerCase();
  con.query(
    `SELECT * FROM users WHERE email = ${mysql.escape(email)}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ msg: "Internal server error checking username validity" });
      } else if (result.length !== 0) {
        return res.status(400).json({ msg: "This email already exits" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            comsole.log(err);
            return res.json({
              msg: "Internal server error hashing user details",
            });
          } else {
            con.query(
              `INSERT INTO users (email, password) VALUES (${mysql.escape(
                email
              )}, ${mysql.escape(hash)})`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  return res
                    .status(400)
                    .json({ msg: "Internal server error saving user details" });
                } else {
                  return res
                    .status(200)
                    .json({ msg: "User has been successfully registered" });
                }
              }
            );
          }
        });
      }
    }
  );
});

router.post("/login", middleware.validateUserData, (req, res) => {
  const email = req.body.email.toLowerCase();
  con.query(
    `SELECT * FROM users WHERE email = ${mysql.escape(email)}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ msg: "Internal server error gathering user details" });
      } else if (result.length !== 1) {
        return res.status(400).json({
          msg: "The provided details are incorrect or the user does not exist",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          (bErr, bResult) => {
            if (bErr || !bResult) {
              return res.status(400).json({
                msg:
                  "The provided details are incorect or the user doesnt not exits",
              });
            } else if (bResult) {
              const token = jwt.sign(
                {
                  userId: result[0].id,
                  email: result[0].email,
                },
                process.env.SECRET_KEY,
                {
                  expiresIn: "7d",
                }
              );
              console.log(token);

              return res.status(200).json({
                msg: "Logged In",
                token,
              });
            }
          }
        );
      }
    }
  );
});

router.post("/add-wine-type", middleware.isLoggedIn, (req, res) => {
  const data = req.body;
  if (data.winename && data.region && data.winetype && data.year) {
    con.query(
      `INSERT INTO wine_types (winename, region, winetype, year) VALUES (${mysql.escape(
        data.winename
      )}, ${mysql.escape(data.region)}, ${mysql.escape(
        data.winetype
      )}, ${mysql.escape(data.year)})`,
      (err, result) => {
        if (err) {
          console.log(err);
          res
            .status(400)
            .json({ msg: "Internal server error adding wine details" });
        } else {
          console.log(result);
          return res.status(201).json({ msg: "Wine type successufully added" });
        }
      }
    );
  } else {
    return res.status(201).json({ msg: "Passed values are incorrect" });
  }
});

router.get("/view-wine-types", middleware.isLoggedIn, (req, res) => {
  con.query(`SELECT * FROM wine_types`, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ msg: "Internal server error getting the details" });
    } else res.json(result);
  });
});

router.post("/add-wine", middleware.isLoggedIn, (req, res) => {
  const userId = req.userData.userId;

  con.query(
    `INSERT INTO winequantity (userid, wineid, changeqty) VALUES (${mysql.escape(
      userId
    )}, ${mysql.escape(req.body.wineId)}, ${mysql.escape(req.body.changeQty)})`,
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res
          .status(201)
          .json({ msg: "Successfully added the wine to the database!" });
      }
    }
  );
});

router.get("/view-wines", middleware.isLoggedIn, (req, res) => {
  const userId = req.userData.userId;
  con.query(
    `SELECT a.id, a.wineid, SUM(a.changeqty) AS total, b.winename, b.winetype, b.region, b.year FROM winequantity a INNER JOIN wine_types b ON a.wineid = b.id WHERE userid = ${userId} GROUP BY wineid`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

router.get("/view-names", middleware.isLoggedIn, (req, res) => {
  con.query(
    `SELECT id, winename FROM wine_types GROUP BY winename`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports = router;
