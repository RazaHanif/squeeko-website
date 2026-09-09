import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.VITE_GOOGLE_EMAIL,
        private_key: process.env.VITE_GOOGLE_KEY
    }
})

export async function lead(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    
    const data = req.body
    console.log(data)

    res.status(200).json({ 
        success: true,
    })
}
