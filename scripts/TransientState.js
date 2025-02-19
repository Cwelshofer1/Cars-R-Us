const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0
}

export const paintcolorId = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const interiorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const technologyId = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const wheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const saveOrderSubmission = async () => {
    const postoptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postoptions)
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)
}











