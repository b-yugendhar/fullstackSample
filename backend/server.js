const e = require("express")
const c = require("cors")

const a = e()
a.use(c())
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