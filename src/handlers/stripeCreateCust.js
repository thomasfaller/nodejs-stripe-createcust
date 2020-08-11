require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  const { name, email, description, phone } = event;
  // If you change this message, you will need to change hello-from-lambda.test.js
  const message = "Hello from Lambda!";
  const customer = await stripe.customers.create({
    name,
    email,
    description,
    phone,
  });

  console.info(`${message}`);

  return customer.id;
};
