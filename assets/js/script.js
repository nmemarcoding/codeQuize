// creat star quize content
body = document.querySelector("body");
var questionsNumber = 0;
var grade = 0;
var questionsValue = 0;
var time = 60;
var answeramount = 0;


var data = [];

var questions = [{
    question: "Commonly used data type Do Not include:",
    a: "String",
    b: "Booleans",
    c: "Alert",
    d: "Numbers",
    answer: "Alert",
    status: true,
    userAnswer: "",
    answerElement: "",
    aColor: "background-color: purple;",
    bColor: "background-color: purple;",
    cColor: "background-color: purple;",
    dColor: "background-color: purple;",
    reset: function() {
        this.status = true;
        this.userAnswer = "";
        this.answerElement = "";
        this.aColor = "background-color: purple;";
        this.bColor = "background-color: purple;";
        this.cColor = "background-color: purple;";
        this.dColor = "background-color: purple;";
    }
}, {
    question: "The condition in an if / else statment is endclose whith _____.",
    a: "Quotes",
    b: "Curly brackets",
    c: "Parenthesis",
    d: "Square brackets",
    answer: "Parenthesis",
    status: true,
    userAnswer: "",
    aColor: "background-color: purple;",
    bColor: "background-color: purple;",
    cColor: "background-color: purple;",
    dColor: "background-color: purple;",
    reset: function() {
        this.status = true;
        this.userAnswer = "";
        this.answerElement = "";
        this.aColor = "background-color: purple;";
        this.bColor = "background-color: purple;";
        this.cColor = "background-color: purple;";
        this.dColor = "background-color: purple;";
    }
}, {
    question: "Array in java Script can be used to store _______.",
    a: "Numbers and string",
    b: "Other arrays",
    c: "Booleans",
    d: "All of the above",
    answer: "All of the above",
    status: true,
    userAnswer: "",
    aColor: "background-color: purple;",
    bColor: "background-color: purple;",
    cColor: "background-color: purple;",
    dColor: "background-color: purple;",
    reset: function() {
        this.status = true;
        this.userAnswer = "";
        this.answerElement = "";
        this.aColor = "background-color: purple;";
        this.bColor = "background-color: purple;";
        this.cColor = "background-color: purple;";
        this.dColor = "background-color: purple;";
    }
}, {
    question: "String values must be enclosed whitin ____ when being assign to variable.",
    a: "Commas",
    b: "Curly brackets",
    c: "Qouts",
    d: "parenthesis",
    answer: "Qouts",
    status: true,
    userAnswer: "",
    aColor: "background-color: purple;",
    bColor: "background-color: purple;",
    cColor: "background-color: purple;",
    dColor: "background-color: purple;",
    reset: function() {
        this.status = true;
        this.userAnswer = "";
        this.answerElement = "";
        this.aColor = "background-color: purple;";
        this.bColor = "background-color: purple;";
        this.cColor = "background-color: purple;";
        this.dColor = "background-color: purple;";
    }
}];
questionsValue = (100 / questions.length);


function mainPageContent() {
    document.querySelector(".high-score").textContent = grade;
    // quize box
    var startContainer = document.createElement("div");
    startContainer.className = "main-container";
    body.appendChild(startContainer);

    var quizeHeader = document.createElement("h2");
    quizeHeader.className = "header"
    quizeHeader.textContent = "Coding Quize CHallenge";
    startContainer.appendChild(quizeHeader);

    var quizeContent = document.createElement("p");
    quizeContent.textContent = "try to answer following code-related questions within the time limit.keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    quizeContent.className = "header";
    startContainer.appendChild(quizeContent);


    var btnContainer = document.createElement("div");
    btnContainer.className = "btnContainer";
    startContainer.appendChild(btnContainer);

    var startQuizeBtn = document.createElement("button");
    startQuizeBtn.setAttribute("id", "startQuizeBtn")
    startQuizeBtn.textContent = "Start Quize";
    startQuizeBtn.className = "header"
    btnContainer.appendChild(startQuizeBtn);

    // removing quizestart up content
    document.querySelector("#startQuizeBtn").addEventListener("click", function() {
        body.removeChild(startContainer);
        showQuestion(questionsNumber);
        timer();
    });
};

//function to show question
function showQuestion(questionNumber) {
    var questionsContainer = document.createElement("div");
    questionsContainer.className = "questin-container";
    questionsContainer.setAttribute("id", "questionsContainer");
    body.appendChild(questionsContainer);

    var question = document.createElement("h2");
    question.setAttribute("id", "question");
    questionsContainer.appendChild(question);

    var answerOl = document.createElement("ol");
    answerOl.className = "answerList";
    var aLi = document.createElement("li");
    var bLi = document.createElement("li");
    var cLi = document.createElement("li");
    var dLi = document.createElement("li");
    var answer = document.createElement("h2");
    var btnContainer = document.createElement("div")
    var nextBtn = document.createElement("button")
    var backtBtn = document.createElement("button")
    aLi.className = "answerList";
    bLi.className = "answerList";
    cLi.className = "answerList";
    dLi.className = "answerList";
    btnContainer.className = "btnContainer";

    question.textContent = questions[questionNumber].question;
    aLi.textContent = questions[questionNumber].a;
    bLi.textContent = questions[questionNumber].b;
    cLi.textContent = questions[questionNumber].c;
    dLi.textContent = questions[questionNumber].d;
    nextBtn.textContent = "Next";
    backtBtn.textContent = "Back";


    questionsContainer.appendChild(answerOl);
    questionsContainer.appendChild(aLi);
    questionsContainer.appendChild(bLi);
    questionsContainer.appendChild(cLi);
    questionsContainer.appendChild(dLi);
    questionsContainer.appendChild(answer);
    questionsContainer.appendChild(btnContainer);

    if (questionNumber > 0) {
        btnContainer.appendChild(backtBtn);
    }
    if (questionNumber < (questions.length - 1)) {
        btnContainer.appendChild(nextBtn);
    }
    answer.textContent = questions[questionNumber].userAnswer;

    // update anser background color
    aLi.setAttribute("style", questions[questionNumber].aColor);
    bLi.setAttribute("style", questions[questionNumber].bColor);
    cLi.setAttribute("style", questions[questionNumber].cColor);
    dLi.setAttribute("style", questions[questionNumber].dColor);

    // cheack the answer
    aLi.addEventListener("click", function() {

        if (aLi.textContent === questions[questionNumber].answer && questions[questionNumber].status === true) {
            questions[questionNumber].userAnswer = "Right";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            grade += questionsValue;
            answeramount++;
            questions[questionNumber].aColor = "background-color: green;";
            aLi.setAttribute("style", questions[questionNumber].aColor);
        } else if ((aLi.textContent != questions[questionNumber].answer && questions[questionNumber].status === true)) {
            questions[questionNumber].userAnswer = "Wrong";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            answeramount++;
            questions[questionNumber].aColor = "background-color: red;";
            aLi.setAttribute("style", questions[questionNumber].aColor);
        }
        document.querySelector(".high-score").textContent = grade;

    });
    bLi.addEventListener("click", function() {
        if (bLi.textContent === questions[questionNumber].answer && questions[questionNumber].status === true) {
            questions[questionNumber].userAnswer = "Right";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            grade += questionsValue;
            answeramount++;
            questions[questionNumber].bColor = "background-color: green;";
            bLi.setAttribute("style", questions[questionNumber].bColor);
        } else if ((bLi.textContent != questions[questionNumber].answer && questions[questionNumber].status === true)) {
            questions[questionNumber].userAnswer = "Wrong";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            answeramount++;
            questions[questionNumber].aColor = "background-color: red;";
            bLi.setAttribute("style", questions[questionNumber].aColor);
        }



    });
    cLi.addEventListener("click", function() {
        if (cLi.textContent === questions[questionNumber].answer && questions[questionNumber].status === true) {
            questions[questionNumber].userAnswer = "Right";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            grade += questionsValue;
            answeramount++;
            questions[questionNumber].cColor = "background-color: green;";
            cLi.setAttribute("style", questions[questionNumber].cColor);
        } else if ((cLi.textContent != questions[questionNumber].answer && questions[questionNumber].status === true)) {
            questions[questionNumber].userAnswer = "Wrong";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            answeramount++;
            questions[questionNumber].aColor = "background-color: red;";
            cLi.setAttribute("style", questions[questionNumber].aColor);
        }
        document.querySelector(".high-score").textContent = grade;


    });
    dLi.addEventListener("click", function() {
        if (dLi.textContent === questions[questionNumber].answer && questions[questionNumber].status === true) {
            questions[questionNumber].userAnswer = "Right";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            grade += questionsValue;
            answeramount++;
            questions[questionNumber].dColor = "background-color: green;";
            dLi.setAttribute("style", questions[questionNumber].dColor);
        } else if ((dLi.textContent != questions[questionNumber].answer && questions[questionNumber].status === true)) {
            questions[questionNumber].userAnswer = "Wrong";
            answer.textContent = questions[questionNumber].userAnswer;
            questions[questionNumber].status = false;
            answeramount++;
            questions[questionNumber].aColor = "background-color: red;";
            dLi.setAttribute("style", questions[questionNumber].aColor);
        }
        document.querySelector(".high-score").textContent = grade;


    });

    // next Button function
    nextBtn.addEventListener("click", function() {
        questionsNumber++;
        body.removeChild(questionsContainer);
        showQuestion(questionsNumber);
    });

    // back buttn functionality
    backtBtn.addEventListener("click", function() {
        questionsNumber--;
        body.removeChild(questionsContainer);
        showQuestion(questionsNumber);

    });
    // answr background-color
    function answerColor(element, color) {
        if (questions[questionNumber].userAnswer === "Right") {
            element.setAttribute("style", color);
        }
        if (questions[questionNumber].userAnswer === "Wrong") {
            element.setAttribute("style", color);
        }
    }




};

function submitContent() {


    // creat container
    var container = document.createElement("div");
    container.className = "submit-container";
    body.appendChild(container);
    var header = document.createElement("h2");
    var scoreText = document.createElement("p");
    var initialContainer = document.createElement("div");
    var inotialText = document.createElement("p");
    var initialInput = document.createElement("input");
    var submitBtn = document.createElement("button");

    submitBtn.setAttribute("id", "submit-btn");

    initialContainer.className = "initialContainer"

    header.textContent = "All done!";
    scoreText.innerHTML = "Your final score is  " + "<span>" + grade + "</span>";
    inotialText.textContent = "Enter Initials:";
    submitBtn.textContent = "sbmit";

    container.appendChild(header);
    container.appendChild(scoreText);
    container.appendChild(initialContainer);
    initialContainer.appendChild(inotialText);
    initialContainer.appendChild(initialInput);
    initialContainer.appendChild(submitBtn);
    document.getElementById("submit-btn").addEventListener("click", function() {
        data.push({ name: initialInput.value, grade: grade })
        data = data.sort((a, b) => {
            return b.grade - a.grade;
        });
        localStorage.setItem("grade", JSON.stringify(data));
        var object = (JSON.parse(localStorage.getItem("grade")));
        // try again
        document.querySelector(".submit-container").remove();
        for (i = 0; i < questions.length; i++) {
            questions[i].reset();
        }
        grade = 0;
        time = 60;
        scoreSection();

    });


};





function callSubmit() {
    var timeInterval = setInterval(function() {
        if (time === 0) {
            document.getElementById("questionsContainer").remove();
            submitContent();
            clearInterval(timeInterval);
        }

    }, 1000);
}

function timer() {
    var timerinterval = setInterval(function() {
        var timer = document.querySelector(".time");
        timer.textContent = time;
        if (time > 0) {
            time--;
        }
        if (time === 0) {
            timer.textContent = 0;
            clearInterval(timerinterval);
            callSubmit()
        }
    }, 10);

}

function scoreSection() {
    // creat elements
    var container = document.createElement("div");
    var header = document.createElement("h2")
    var olEl = document.createElement("ol")
    var btnContainer = document.createElement("div");
    var goBack = document.createElement("button")
    var clearScores = document.createElement("button");

    // elements classes
    container.className = "score-container";
    goBack.setAttribute("id", "goBackBtn");
    clearScores.setAttribute("id", "ClearScoresBtn");

    // elements content
    header.textContent = "High scores"
    goBack.textContent = "Go back"
    clearScores.textContent = "Clear high scores"

    // append classes
    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(olEl);
    container.appendChild(btnContainer);
    btnContainer.appendChild(goBack);
    btnContainer.appendChild(clearScores);
    for (i = 0; i < data.length; i++) {
        var temp = document.createElement("li")
        temp.textContent = data[i].name + "-" + data[i].grade;
        olEl.appendChild(temp);
    }
    document.getElementById("goBackBtn").addEventListener("click", function() {
        container.remove();
        questionsNumber = 0;
        mainPageContent();

    });
    document.getElementById("ClearScoresBtn").addEventListener("click", function() {
        localStorage.removeItem("grade");
        data = [];
    });


};


// caling function in the main
mainPageContent();

if (localStorage.getItem("grade")) {
    var object = (JSON.parse(localStorage.getItem("grade")));
    for (i = 0; i < object.length; i++) {
        data.push(object[i]);
    }

    data = data.sort((a, b) => {
        return b.grade - a.grade;
    });

    for (i = 0; i < object.length; i++) {
        window.alert(data[i].name + data[i].grade);
    }
}