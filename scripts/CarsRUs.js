
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./Orders.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1> 
   
        ${Technologies()}
        ${Wheels()}
        ${Paints()}
        ${Interiors()}

    <article>
    <button id="orderButton">Create Custom Order</button>
</article>
    <article class="customOrders">
<h2>Custom Car Orders</h2>
${Orders()}
</article>

` }








// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "resource") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption) 
//         }
//     }
// )

