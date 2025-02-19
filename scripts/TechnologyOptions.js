import { technologyId } from "./TransientState.js"

const handleTechnolgyChange = (changeEvent) =>{
    if(changeEvent.target.name === "technology"){
        technologyId(parseInt(changeEvent.target.value))
    }
}

export const technologyOptions = async () => {
    document.addEventListener("change", handleTechnolgyChange)
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()


    let technologiesHTML = ""

    technologiesHTML += `<select id="technologyResource" name="technology">`
    technologiesHTML += `<option value="0"> Select a technology package</option>`

    const technologyStringArray = technologies.map(
        (technology) => {
            return ` <option value="${technology.id}">${technology.technology}</option>
                        `
        }
    )
    technologiesHTML += technologyStringArray.join("")
    technologiesHTML += "</select>"
    return technologiesHTML
}






