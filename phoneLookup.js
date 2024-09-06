const twilio = require("twilio");
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function fetchPhoneNumber() {
  const phoneNumber = await client.lookups.v2
    .phoneNumbers(process.argv[2])
    .fetch({ fields: "line_type_intelligence" });

  console.log(phoneNumber.lineTypeIntelligence);
}

fetchPhoneNumber();