const nodemailer = require('nodemailer')

const sendContactEmail = async ({ fromName, fromEmail, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: process.env.EMAIL_USER,
        subject: `📬 הודעה חדשה מדף העסק שלך - מאת ${fromName}`,
        text: `
שם: ${fromName}
אימייל: ${fromEmail}

הודעה:
${message}
        `
    }

    await transporter.sendMail(mailOptions)
}

module.exports = { sendContactEmail }
