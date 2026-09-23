export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed."
        })
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return res.status(404).json({
            success: true,
            message: "Successfully Submitted."
        })
}