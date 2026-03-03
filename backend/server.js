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

a.listen(5000, () => {
    console.log("Server started on port 5000")
})