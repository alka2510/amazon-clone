const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JH56ySJrqb7fP3a3sVAGNByHOOSnqLKzD11eIkBFE3xwXEfctHNxsxW9KzXHlSUKAcZrlDdsAwTIRxcQoC2XtNv00fli17ioZ"
);

//api

//-App config
const app = express();

//-middleware
app.use(cors({ origin: true }));
app.use(express.json());

//-api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "test transaction",
  });
  console.log(paymentIntent);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    title: "title",
  });
});

//-listen
exports.api = functions.https.onRequest(app);
