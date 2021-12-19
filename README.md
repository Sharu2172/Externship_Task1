# Task - Service to send email
### Description :
Create a POST api which will accept receiver email address & email content in
the request body and send an email to the receiver with email content present in the
request body.
Sample request body -
{
“to”: “srimanta@gmail.com”,
“email_body”: “Hi there…”
}
In case of success in sending email, service will respond as -
{
“success”: true,
“message”: “Email sent successfully”
}
In case of failure in sending email, service will respond as -
{
“success”: false,
“message”: “Error message”
}
### Resources:
1. Node Js : https://nodejs.org/en/
2. Express : https://expressjs.com/
3. Nodemailer: https://nodemailer.com/about/
4. Ethereal: https://ethereal.email/
