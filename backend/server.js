const e = require("express")
const c = require("cors")

const a = e()

a.use(c({
    origin: "https://fullstack-sample-eight.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}))

a.options("*", c())

a.use(e.json())

a.get("/", (r, s) => {
    s.send("Server Running")
})

a.post("/contact", (r, s) => {
    const { n, m } = r.body
    console.log(n, m)
    s.json({ message: "Data received successfully" })
})

const p = process.env.PORT || 5000
a.listen(p)