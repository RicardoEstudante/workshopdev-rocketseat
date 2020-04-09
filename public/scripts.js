function onOff(){
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkField(event) {

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        
        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })
    
    for( let value of valuesToCheck){
        event.target[value].value
    }

    if(isEmpty) {
        event.preventDefault()
        alert("Prencha todos os campos")
    }
}

