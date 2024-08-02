const express = require("express");
const twilio = require("twilio");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.use(
  cors({
    origin: "https://lively-mooncake-e3e9c7.netlify.app/",
  })
);

app.use(express.json());

const sendMessage = async (phoneNumber, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${phoneNumber}`,
    });

    return { success: true, sid: response.sid };
  } catch (error) {
    if (error.code === 21614) {
      return {
        success: false,
        error: "Number is not registered with WhatsApp.",
      };
    }
    return { success: false, error: error.message };
  }
};

app.post("/send-message", async (req, res) => {
  const { phoneNumber, message } = req.body;

  const result = await sendMessage(phoneNumber, message);

  if (result.success) {
    res.status(200).send(result);
  } else {
    res.status(400).send(result);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
