function fetchData(callback) {
    console.log('Data fetched');
    callback();
}

function processData(callback) {
    setTimeout(() => {
        console.log('Data processed');
        callback();
    }, 1000);
}

function displayData() {
    console.log('Data displayed');
}

// Callback Hell
fetchData(function () {
    processData(function () {
        displayData();
    });
});