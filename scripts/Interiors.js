

import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors") {
            setInteriors(parseInt(event.target.value))
            window.alert(`user has chose ${event.target.value}`)
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select name="interiors" id="interior">'
    html += '<option value="0">Select a interior style</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.styles}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
