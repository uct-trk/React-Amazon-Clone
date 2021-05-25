const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IuaXvEKpFr4vhJ9SXa2U1s4UJbl7QH9m69B8pxYRev6e7gwjuc0OazEUXvOVwiG6mLy3O4pGg5zGMdbFSidpugs00S0H2aJeK")

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recived! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
    // okey - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/e-commerce-c8ec0/us-central1/api