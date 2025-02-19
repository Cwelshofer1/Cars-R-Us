import { interiorId } from "./TransientState.js"

const handleInteriorChange = (changeEvent) =>{
    if(changeEvent.target.name === "interior") {
        interiorId(parseInt(changeEvent.target.value))
    }
}


export const interiorOptions = async () => {
    document.addEventListener("change", handleInteriorChange)

    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let interiorHTML = ""
    interiorHTML += `<select id="resource" name="interior">`
    interiorHTML += `<option value="0">Select an interior material</option>`

    const interiorStringArray = interiors.map(
        (interior) => {
            return `<option  value="${interior.id}">${interior.interior}</option>`
        }
    )
    interiorHTML += interiorStringArray.join("")
    interiorHTML += "</select>"
    return interiorHTML
}













