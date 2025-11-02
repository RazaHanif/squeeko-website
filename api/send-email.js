import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }
    
    const data = req.body

    if (!data.type) {
        console.error('Error: Missing type field')
        return res.status(400).json({ error: 'Type field is required' })
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_INFO,
          pass: process.env.EMAIL_PASS
        },
    });
      

    let emailContent = ''
    let subject = ''


    if (data.type === 'about') {
        subject = `General Inquiry - ${data.name}`
        emailContent = `
            General Inquiry\n
            Name: ${data.name}\n
            Email: ${data.email}\n
            Phone: ${data.phone}\n
            Message: ${data.message}
        `
    }
    else {
        res.status(500).json({ 
            success: false, 
            error: '...Huh!', 
        })
    }

    try {
        await transporter.sendMail({
            from: `"Squeeko Website" <${process.env.EMAIL_INFO}>`,
            to: process.env.EMAIL_INFO,
            subject: subject,
            text: emailContent,
            replyTo: data.email
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
