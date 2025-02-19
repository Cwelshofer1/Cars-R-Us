export const orderPrice = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await fetchResponse.json()

    
    let ordersHTML = ""
    const ordersStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            
            return `<div>${order.paint.color} car with ${order.wheel.wheel} wheels, ${order.interior.interior} interior and the 
            ${order.technology.technology} for a total cost of  $${orderPrice.toFixed(2)}</div>`

        }
    )
    ordersHTML += ordersStringArray.join("")
    return ordersHTML
}