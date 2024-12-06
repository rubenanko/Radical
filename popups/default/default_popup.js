document.addEventListener('DOMContentLoaded', documentEvents  , false);

function initButton()
{
    const button = document.getElementById("toggle_button");
    button.addEventListener('click', toggle);

    chrome.runtime.sendMessage({"action":"get-state"})
    .then((response) => {
        button.value = response.state ? "Disable":"Enable";
    })
    .catch((error) => {
        console.warn("Popup could not send message", error)
    });

}

function updateButton()
{
    if(document.getElementById("toggle_button").value == "Enable") {document.getElementById("toggle_button").value = "Disable"} 
    else {document.getElementById("toggle_button").value = "Enable"}
}

function documentEvents() {    
    initButton();
}

function toggle()
{   
    updateButton();
    chrome.runtime.sendMessage({"action":"toggle"})
        .then((response) => {
        })
        .catch((error) => {
            console.warn("Popup could not send message", error)
        });
}