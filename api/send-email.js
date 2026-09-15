import nodemailer from 'nodemailer'

/*
send error logs to email

catch (err) {
  await transporter.sendMail({
    to: process.env.EMAIL_INFO,
    subject: '🚨 Email Function Error',
    text: err.stack || err.message
  })

  res.status(500).json({ success: false })
}
*/


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    
    const data = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_INFO,
          pass: process.env.EMAIL_PASS
        },
    });
      

    let subject = "Form Submission"
    let emailContent = `Form Submission from Squeeko Website from ${data.firstName} ${data.lastName}, please check the google sheet`

    try {
        await transporter.sendMail({
            from: `"SQUEEKO Website" <${process.env.EMAIL_INFO}>`,
            to: process.env.EMAIL_INFO,
            subject: subject,
            text: emailContent,
        })
        res.status(200).json({ success: true })
    } catch (err) {
        console.log('Failed to send email')
        console.log(err)

        res.status(500).json({ 
            success: false, 
            error: 'Failed to send email', 
        })
    }
}
