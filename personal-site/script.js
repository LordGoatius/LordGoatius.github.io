console.log("Site Accessed")

const testList = [
    "resources/2.1.jpg",
    "resources/2.jpg",
    "resources/DSC04311.jpg",
    "resources/ErenSea-4.jpg",
    "resources/IMG_6574.jpg",
    "resources/pitchfork_good.png"
]

let index = 0;

function cycleImage() {
    var imgToView = testList[indexIncrement()];
    var outputSpot = document.querySelector("output");
    let outputStuff = `<img src="${imgToView}" alt="Cyclable Image" id = "cyclableImage" width="500" height="500">`;
    outputSpot.innerHTML = outputStuff;
    console.log(index);
}

function indexIncrement() {
    console.log("Successfully Called")
    index = (index + 1)%6;
    return index
}