import { wheelId } from "./TransientState.js"

const handleWheelChange = (changeEvent) =>{
    if(changeEvent.target.name === "wheel") {
        wheelId(parseInt(changeEvent.target.value))
    }
}

export const wheelOptions = async () => {
    document.addEventListener("change", handleWheelChange)
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelHTML = ""

    wheelHTML += `<select id="wheelResource" name="wheel">`
    wheelHTML += `<option value="0">Select a wheel style</option>`

    const wheelStringArray = wheels.map(
        (wheel) => {

            return`<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )
    wheelHTML += wheelStringArray.join("")
    wheelHTML += "</select>"
    return wheelHTML
}





