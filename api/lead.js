import { google } from "googleapis"
import nodemailer from "nodemailer"

const formatPhone = (phoneNumber) => {
    const digits = phoneNumber.replace(/\D/g, "")

    if (digits.length === 10) {
        return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    }

    return phoneNumber
}

export default async function leadHandler(req, res) {
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
            new Date().toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
            }),
            "New",
            formData.firstName || "",
            formData.lastName || "",
            formData.email || "",
            formatPhone(formData.phone || ""),
            formData.company || "",
            formData.daycareType || "",
            formData.maxChildCapacity || "",
            formData.numOfStaff || "",
            formData.numOfLocations || "",
            formData.accepting || "",
            formData.managementType || "",
            Array.isArray(formData.painPoints)
                ? formData.painPoints.map(point => `• ${point}`).join("\n")
                : "",
            formData.timeline || "",
        ]

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Leads!A:O",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row]
            },
        })

        try {

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            })              
                    
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: [
                        "squeekoapp@gmail.com", 
                        "squeekoadmin@gmail.com"
                    ],
                subject: "Website Form Submission",
                text: `${formData.firstName} ${formData.lastName} has submitted the form. It has been added to the Google Sheet.`,
            })

        } catch (emailError) {
            console.error("Email Failed to Send ", emailError)
        }

        return res.status(200).json({
            success: true,
            message: "Successfully Submitted."
        })
    } catch (err) {
        console.error("Error Submitting: ", err)

        return res.status(500).json({
            success: false,
            message: "Failed to submit."
        })
    }
}