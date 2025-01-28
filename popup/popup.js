function injectTheScript() {
    // Query the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']})
    })
}

function goToMeasurements() {
    console.log('In goToMeasurements');
  chrome.tabs.update({
     url: "https://my.patientsknowbest.com/test/myMeasurements.action?contextUserId=527253283"
});
}

// document.getElementById('clickactivity').addEventListener('click', injectTheScript)
document.getElementById('clickactivity').addEventListener('click', goToMeasurements)
