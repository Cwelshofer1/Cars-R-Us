import { paintColorOptions } from "./PaintColorOptions.js"
import { technologyOptions } from "./TechnologyOptions.js"
import { wheelOptions } from "./WheelOptions.js"
import { interiorOptions } from "./InteriorOptions.js"
import { saveOrder } from "./OrderButton.js"
import { orderPrice } from "./Orders.js"

const container = document.querySelector("#container")

const render = async () => {

const orderPriceHTML = await orderPrice()
const paintColorOptionsHTML = await paintColorOptions()
const technologyOptionsHTML =  await technologyOptions()
const wheelOptionsHTML = await wheelOptions()
const interiorOptionsHTML = await interiorOptions()
const saveOrderHTML = await saveOrder()

     const carsHTML = `
     <h1>Cars-R-Us</h1>
     <article class="choices">
            <section class="choices__metals options">
                <h2>Paint Colors</h2>
                ${paintColorOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Interior Options</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Technology Options</h2>
                ${technologyOptionsHTML}
            </section>
        </article>

       
        <article class="customOrders">
            <h2>Wheel Options</h2>
            ${wheelOptionsHTML}

        </article>
         <article class="order">
         ${saveOrderHTML}
        </article>

         <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${orderPriceHTML}
            

        </article>
    `
    container.innerHTML = carsHTML
}
document.addEventListener("orderSubmitted", event =>{
console.log("State of data has changed")
render()
})
render()