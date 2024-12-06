var state = false;

function removeTab(tab) {chrome.tabs.remove(tab.id)}

function removeWindow(window) {chrome.windows.remove(window.id)}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // sendResponse({message: "Service worker processed the message"})

        if(request["action"] == "toggle")
        {
            state = ! state;
            if(state)
                {
                    chrome.tabs.onCreated.addListener(removeTab);
                    chrome.windows.onCreated.addListener(removeWindow);
                }
            else
            {
                chrome.tabs.onCreated.removeListener(removeTab);
                chrome.windows.onCreated.removeListener(removeWindow);
            }
        }

        if(request["action"] == "get-state")
        {
            sendResponse({"state":state});
        }
    }
  )
  