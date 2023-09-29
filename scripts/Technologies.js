import { getTechnologies, setTechnologies } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technologies") {
            setTechnologies(parseInt(event.target.value))
            window.alert(`user has chose ${event.target.value}`)
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select name="technologies" id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map( (tech) => {
            return `<option value="${tech.id}">${tech.pack}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}