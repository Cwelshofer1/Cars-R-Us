import { paintcolorId } from "./TransientState.js"

const handlePaintColorChange = (changeEvent) =>{
    if(changeEvent.target.name === "paint"){
        paintcolorId(parseInt(changeEvent.target.value))
    }
}

export const paintColorOptions = async () => {
    document.addEventListener("change", handlePaintColorChange)
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()
    
    let paintHTML = ""

    paintHTML += `<select id="resource" name="paint">`
    paintHTML += `<option value="0"> Select a paint color</option>`
    const paintStringArray = paints.map(
        (paint) => {
            return `
                <option value="${paint.id}">${paint.color}</option>`
                
        
        }
    )
    paintHTML += paintStringArray.join("")
    paintHTML += "</select>"
    return paintHTML

}









