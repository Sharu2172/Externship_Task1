const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Middleware codes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/*
Request body format
{
    to: "<email address>",
    email_body: "<Body of Email>",
}
*/

app.post('/mail', async (req, res) => {
    try {
        // Destructuring 'to' address and 'email body' from request
        const { to, email_body } = req.body;
        // Creating a transporter using nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        // Sending the mail
        await transporter.sendMail({
            from: process.env.EMAIL_ID,
            to: to,
            subject: "Hello ✔",
            text: email_body,
            html: `<b>${email_body}</b>`,
        });
        // Send response to user
        res.status(200).json({
            "success": true,
            "message": "Email sent successfully"
        });
    } catch (e) {
        // Setting status code to 400 and sending error message
        const message = (e.message) ? e.message : "Error Message";
        // Sending response to user
        res.status(400).json({
            "success": false,
            "message": message
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});