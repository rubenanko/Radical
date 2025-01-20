var state;

chrome.storage.session.get(["state"]);


// if(state == null)
//     state = false;

// console.log(state);

function removeTab(tab) {chrome.tabs.remove(tab.id)}

function removeWindow(window) {chrome.windows.remove(window.id)}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // sendResponse({message: "Service worker processed the message"})

        if(request["action"] == "toggle")
        {
            state = ! state;
            chrome.storage.session.set({"state" : state});

            // if(state)
            //     {
            //         chrome.tabs.onCreated.addListener(removeTab);
            //         chrome.windows.onCreated.addListener(removeWindow);
            //         chrome.action.setIcon({ path: "../images/enabled_icon_128.png"});
            //     }
            // else
            // {
            //     chrome.tabs.onCreated.removeListener(removeTab);
            //     chrome.windows.onCreated.removeListener(removeWindow);
            //     chrome.action.setIcon({ path: "../images/disabled_icon_128.png"});
            // }
        }

        if(request["action"] == "get-state")
        {
            sendResponse({"state":state});
        }
    }
  )
  