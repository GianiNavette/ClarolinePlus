var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    (function () {
        var ln = links[i];
        var location = ln.href;
        ln.onclick = function () {
            chrome.tabs.update({ active: true, url: location });
        };
    })();
}

var darkButton = document.getElementById("darkMode")
darkButton.addEventListener("click", changeTheme);

chrome.storage.sync.get('darkMode', function (items) {
    darkButton.checked = items['darkMode'];

});

function changeTheme() {

    chrome.storage.sync.set({ 'darkMode': darkButton.checked }, function () {

    });

}


var fileNameButton = document.getElementById("nomfichier")
fileNameButton.addEventListener("click", fileNameCustom);

chrome.storage.sync.get('customFileName', function (items) {
    fileNameButton.checked = items['customFileName'];

});

function fileNameCustom() {

    chrome.storage.sync.set({ 'customFileName': fileNameButton.checked }, function () {

    });

}

