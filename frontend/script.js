const f = document.getElementById("f")
const r = document.getElementById("r")

f.addEventListener("submit", async (e) => {
    e.preventDefault()

    const n = document.getElementById("n").value
    const m = document.getElementById("m").value

    const d = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ n, m })
    })

    const j = await d.json()
    r.innerText = j.message
})