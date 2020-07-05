const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'


sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'icv852@gmail.com',
    from: 'icv852@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})