export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: true,
            message: "Successfully Submitted."
        })
    }
}