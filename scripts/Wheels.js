
import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
            window.alert(`user has chose ${event.target.value}`)
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select name="wheels" id="wheel">'
    html += '<option value="0">Select some Wheels </option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}