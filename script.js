var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a href='mailto:shardik2001@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/hardik302001'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/shardik2001' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>HARDIK_SHARMA_RESUME.pdf</label></div><a href='assets/HARDIK_SHARMA_RESUME.pdf' download='HARDIK_SHARMA_RESUME.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10){
        minutes = "0" + minutes;
    }
    lastSeen.innerText = "last seen today at " + hour + ":" + minutes
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10){
        minutes = "0" + minutes;
    }
    dateLabel.innerText = hour + ":" + minutes;
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Hardik Sharma</a>.</span><br><br>I am a  <span class='bold'>Software Engineer</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br> Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'profiles'</span> - to get my coding profiles and other handles<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "profiles":
            sendTextMessage("You can find me on : <br> <a class='alink' target='_blank' href='https://www.leetcode.com/targetGuardian'><span class='bold'>Leetcode</a> <br> <a class='alink' target='_blank' href='https://www.codechef.com/users/hardik2001'><span class='bold'>Codechef</a> <br> <a class='alink' target='_blank' href='https://codeforces.com/profile/4e1s3n8e7g'><span class='bold'>Codeforces</a> <br> <a class='alink' target='_blank' href='https://www.hackerrank.com/shardik2001'><span class='bold'>HackerRank</a>  <br> <a class='alink' target='_blank' href='https://www.github.com/hardik302001'><span class='bold'>Github</a> <br> <a class='alink' target='_blank' href='https://linkedin.com/in/shardik2001'><span class='bold'>Linkedin</a> ");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I believe that I am a software developer with particular expertise in :<br><span class='bold'>Python<br>C/C++<br>Java<br>CSS<br>HTML<br>Javascript<br>SQL</span><br><br>I also have experience with following frameworks :<span class='bold'><br>Reactjs<br>Django<br>Typescript<br>Bootstrap<br>MaterialUI<br>GraphQL</span><br><br>I have worked with <br><span class='bold'>AWS services<br>Google Cloud Platform<br></span><br>Favourite IDE:<span class='bold'>VSCode</span></span>");
            break;
        case "education":
            sendTextMessage("I have completed my Bachelors in Technology from IIIT SriCity, Andhra Pradesh from 2019 - 2023 with majors in Computer Sciene Engineering. <br><br>I have done my High Schooling from Greenwood Public School , Gurgaon with 95.4 %.");
            break;
        case "address":
            sendTextMessage("I belong from Gurugram, Haryana.");
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://linkedin.com/in/shardik2001'><span class='bold'>Hardik Sharma</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/hardik302001'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10){
        minutes = "0" + minutes;
    }
    dateLabel.innerText = hour + ":" + minutes;
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10){
        minutes = "0" + minutes;
    }
    dateLabel.innerText = hour + ":" + minutes;
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
