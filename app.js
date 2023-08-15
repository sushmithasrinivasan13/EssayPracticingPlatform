function random(){
const topics=[
    "School days",
    "Artificial Intelligence",
    "Pollution",
    "Patriotism",
    "Environment Pollution",
    "Women Empowerment",
    "Music",
    "Mobile Phone",
    "Internet",
    "Favorite Festival",
    "Newspaper",
    "Favorite leader",
    "My Favorite Animal",
    "Cricket vs OtherSports",
    "Describe yourself",
    "Your leadership experience",
    "Industrial Visit",
    "Shopping plastic bags",
    "Unhealthy Junk Food",
    "Deforestation",
    "Why Afforestation is important?",
    "Library is important why?",
    "Starvation in India",
    "Pollution due to festivals",
    "Global warming",
    "Mobile Game Addiction",
    "Child labour",
    "Friendship",
    "Positive thinking",
    "About your Pet",
    "Your opinion about Facebook",
    "Your opinion about social Media",
    "Imporatance of Education",
    "What is success in your opinion"
];
const randomIndex=Math.floor(Math.random()*topics.length);
const topic=topics[randomIndex];
document.getElementById("box").innerText= topic;
document.getElementById("customInput").disabled=true;
document.getElementById("randomButton").disabled=false;
document.getElementById("y").style.display="none";
}
function custom(){
    document.getElementById("box").innerText= "";
    document.getElementById("y").style.display="block";
    document.getElementById("customInput").disabled = false;
    // document.getElementById("randomButton").disabled=true;
    // document.getElementById("box").innerText="";
}

function start() {
    const selectedTopic = document.getElementById("box").innerText;
    const customInputValue = document.getElementById("customInput").value.trim();
    if (!selectedTopic&&!customInputValue) {
        alert("PLEASE..! Click On Random Topic Or Provide a Custom Topic");
        return;
    }
    location.href = `essay.html?topic=${encodeURIComponent(selectedTopic)}`;
}
document.getElementById('startTimer').addEventListener('click', start);

let countdown;

function startTimer() {
    var selectedTime = document.getElementById('time').value;
    var endTime = new Date().getTime() + (selectedTime * 60 * 1000);
    var userInput = document.getElementById('userInput');

    userInput.disabled = false; 
    userInput.focus(); 

    document.getElementById('startTimer').disabled = true;

    countdown = setInterval(function() {
        var now = new Date().getTime();
        var distance = endTime - now;

        var minutes = Math.floor(distance / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timerDisplay').innerHTML = minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('timerDisplay').innerHTML = "Time's up!";
            userInput.disabled = true; 
            document.getElementById('seeResultButton').style.display = 'block';
            document.getElementById('resetMessage').style.display = 'inline';
        }
    }, 1000);
}

function reset() {
    clearInterval(countdown);
    document.getElementById('startTimer').disabled = false;
    document.getElementById('resetMessage').style.display = 'none';
    document.getElementById('timerDisplay').innerHTML = "";
    document.getElementById('userInput').disabled = true;
    document.getElementById('userInput').value = "";
    document.getElementById('seeResultButton').style.display = 'none';
}

document.getElementById('rese').addEventListener('click', reset);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.getElementById('userInput').addEventListener('paste', function(event) {
    event.preventDefault();
});

document.getElementById('userInput').disabled = true;

function res(){
    const userInput = document.getElementById('userInput').value;
    const wordCount = countWords(userInput);
    location.href = `result.html?count=${wordCount}`;
}

function countWords(text) {
    console.log("Counting words...");
    const words = text.trim().split(/\s+/);
    return words.length;
}

function showWordCount() {
    const userInput = document.getElementById('userInput').value;
    const wordCount = countWords(userInput);
    const wordCountElement = document.getElementById('wordCount');
    wordCountElement.textContent = `Word Count: ${wordCount}`;
    wordCountElement.style.animation = 'fadeInUp 1s ease-out';
    setTimeout(() => {
        wordCountElement.style.animation = '';
    }, 1000);
}

function retry(){
    location.href="index.html";
}
function Exit(){
    window.location.href = "https://www.google.com";
}
