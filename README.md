# Task - Service to send email

## Description :

<br>

Create a POST api which will accept receiver email address & email content in the request body and send an email to the receiver with email content present in the
request body.
<br>
### Sample request body -<br>
```ruby
{
    to: "srimanta@gmail.com",
    email_body: "Hi there…"
}
```
## Response body
* In case of success in sending email, service will respond as -<br>
```json
{
    success: true,
    message: "Email sent successfully"
}
```
* In case of failure in sending email, service will respond as -<br>
```json
{
    success: false,
    message: "Error message"
}
```

## Resources:

- Node Js : https://nodejs.org/en/
- Express : https://expressjs.com/
- Nodemailer: https://nodemailer.com/about/
- Ethereal: https://ethereal.email/
