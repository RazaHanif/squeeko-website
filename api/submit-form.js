export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    
    const data = req.body

    
    try {
        await transporter.sendMail({
            from: `"Kidz Korner Website" <${process.env.EMAIL_INFO}>`,
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
