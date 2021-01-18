try {
    function die(){
        let confirmation = confirm("Do you really want to kill your browser? I'm not responsible for what can happen. Remember that you use this at your own risk.")
        if (confirmation == false){
            alert("Ok maybe not now.")
        } else {
            let killingYourComputer = document.createElement("div")
            killingYourComputer.setAttribute("class", "killing")
            document.body.appendChild(killingYourComputer)
    
            while (true){
                console.count("Killing your browser...")
            }
        }
    }
} catch (error){
    let errorElement = document.createElement("div")
    let errorElementTextNode = document.createTextNode(`Oopsie doopsie, we got an unexpected error: ${error}`)
    errorElement.appendChild(errorElementTextNode)
    errorElement.setAttribute("class","error")
    document.body.appendChild(errorElement)
}