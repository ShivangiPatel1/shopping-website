const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SEC);

const uuid = require("uuid").v4;

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILLIO_ACC_ID;
const authToken = process.env.TWILLIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
//sendgrid configuration

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMail = async (msg) => {
  try {
    await sgMail.send(msg);
    console.log("Message sent successfully!");
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

router.post("/payment", async (req, res) => {
  let error;
  let status;
  try {
    const { cart, stripeToken } = req.body;
    console.log(req.body);
    const customer = await stripe.customers.create({
      email: stripeToken.email,
      source: stripeToken.id,
    });
    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: cart.total * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: stripeToken.email,
        shipping: {
          name: stripeToken.card.name,
          address: {
            line1: stripeToken.card.address_line1,
            line2: stripeToken.card.address_line2,
            city: stripeToken.card.address_city,
            country: stripeToken.card.address_country,
            postal_code: stripeToken.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    console.log("Charge:", charge);
    status = 200;
    client.messages
      .create({
        body: `Your payment was successfull`,
        from: "+18576756986",
        to: "+16132613891",
      })
      .then((message) => console.log(message.sid))
      .catch((e) => console.log(e));
    sendMail({
      to: stripeToken.email,
      from: "spatel27@mylangara.ca",
      subject: "Order Status",
      text: `Your order  was successfully placed`,
    });
  } catch (error) {
    error = error;
    status = 500;
    console.log(error)
    client.messages.create({
      body: `Your payment failed try again`,
      from: '+18576756986',
      to: '+16132613891'
    })
   .then(message => console.log(message.sid)).catch(e=>console.log(e));
  }
  res.status(status);
  res.send(error);
});

module.exports = router;
