import { getOrders, getPaints, getInteriors, getWheels, getTechnologies } from "./database.js"
const technologies = getTechnologies()
const wheels = getWheels()
const interiors = getInteriors()
const paints = getPaints()
const orders = getOrders()


const buildOrderListItem = (order) => {
   

const foundPaints = paints.find(
        (paint) => {
            return paint.id === order.paintId
        
        }
    )

const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        
        }
    )

const foundTechnologies = technologies.find(
    (technology) => {
        return technology.id === order.techId
    
    }
)

const foundInteriors = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    
    }
)

console.log(foundInteriors)
console.log(foundPaints)
console.log(foundWheels)
console.log(foundTechnologies)
// console.log(database.orderBuilder)
// console.log(database.orderBuilder())





let newCost = foundWheels.price + foundPaints.price + foundTechnologies.price + foundInteriors.price

    const totalCost = newCost
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {


    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
