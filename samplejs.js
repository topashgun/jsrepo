console.log("Page has successfully loaded!");


function getRandomData(paramValue) {
    const randomNumber = Math.floor(Math.random() * 100); // Random number between 0-99
    const randomTexts = [
        "Hello, world!",
        "JavaScript is awesome!",
        "Have a great day!",
        "Coding is fun!",
        "Keep learning, keep growing!"
    ];
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)]; // Random text

    return {
        paramValue:paramValue,
        number: randomNumber,
        text: randomText
    };
}
