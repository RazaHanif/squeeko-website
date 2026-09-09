import { google } from "googleapis"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        })
    }

    try {
        const formData = req.body

        if (!formData.firstName || !formData.email) {
            return res.status(400).json({
                success: false,
                message: "Data is incomplete",
            })
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_EMAIL,
                private_key: process.env.GOOGLE_KEY.replace(/\\n/g, "\n")
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })

        const sheets = google.sheets({
            version: "v4",
            auth
        })

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
            Array.isArray(formData.painPoints) ? formData.painPoinds.join(", ") : "",
            formData.timeline || "",
        ]

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Leads!A:N",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row]
            },
        })

        return res.status(200).json({
            success: true,
            message: "Successfully Submitted."
        })
    } catch (err) {
        cons
    }
}