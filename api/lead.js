import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.VITE_GOOGLE_EMAIL,
        private_key: process.env.VITE_GOOGLE_KEY.replace(/\\n/g, "\n")
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
})

const sheets = google.sheets({
    version: "v4",
    auth,
})

export async function handler(req, res) {
    try {
        const formData = req.body

        if (!formData.email || !formData.firstName) {
            return res.status(400).json({
                success: false,
                message: "Incomplete Form"
            })
        }

        const row = [
            new Date().toISOString(),
            formData.firstName || "",
            formData.lastName || "",
            formData.email || "",
            formData.phone || "",
            formData.company || "",
            formData.daycareType || "",
            formData.maxChildCapacity || "",
            formData.numOfStaff || "",
            formData.numOfLocations || "",
            formData.accepting || "",
            formData.managementType || "",
            Array.isArray(formData.painPoints) ? formData.painPoints.join(",") : "",
            formData.timeline || "",
        ]

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.VITE_GOOGLE_SHEET_ID,
            range: "Leads!A:N",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row]
            }
        })

        return res.status(200).json({
            success: true,
            message: "Successfully Submitted"
        })
    } catch (err) {
        console.log("Error saving lead: ", err)

        return res.status(500).json({
            success: false,
            message: "Failed to save lead."
        })
    }
}

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
