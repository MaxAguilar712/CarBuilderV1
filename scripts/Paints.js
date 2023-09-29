import { getPaints, setPaints } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paints") {
            setPaints(parseInt(event.target.value))
            window.alert(`user has chose ${event.target.value}`)
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select name ="paints" id="paint">'
    html += '<option value="0">Select a paint color </option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}