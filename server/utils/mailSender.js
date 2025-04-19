const nodemailer = require("nodemailer")

const mailSender = async (email) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })

    let info = await transporter.sendMail({
      from: `"Smart Form | Aman Prakash" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: 'Form Submission Received',
      html: `<p>Thank you, we received your form!</p>`,
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender