let questions = [
    {
        question: "ما هو الفريق الذي فاز بكأس العالم لعام 2018؟",
        choices: ["فرنسا", "كرواتيا", "بلجيكا"],
        correctAnswer: "فرنسا"
    },
    {
        question: "من هو أكثر هداف في تاريخ كأس العالم لكرة القدم؟",
        choices: ["ميروسلاف كلوزه", "رونالدو", "بيليه"],
        correctAnswer: "ميروسلاف كلوزه"
    },
    {
        question: "ما هو اسم الاستاد الذي يُعتبر أكبر استاد كرة قدم في العالم من حيث السعة؟",
        choices: ["سانتياغو برنابيو", "ملعب كامب نو", "ملعب ماراكانا"],
        correctAnswer: "ملعب ماراكانا"
    },
    {
        question: "ما هو الفريق الذي فاز بدوري أبطال أوروبا لعام 2021؟",
        choices: ["برشلونه", "تشيلسي", "الاسماعيلي"],
        correctAnswer: "تشيلسي"
    },
    {
        question: "من هو اللاعب الذي يُعتبر أفضل حارس مرمى في تاريخ كرة القدم؟",
        choices: ["إيكر كاسياس", "جيانلويجي بوفون", "ليف ياشين"],
        correctAnswer: "ليف ياشين"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }, {
        question: "x",
        choices: "x",
        correctAnswer: "x"
    }
];
let btnSpeacker = document.getElementById("menuBtnSpeacker");
let ContactInputs = document.getElementById("ContactInputs");
let questionElement = document.getElementById("question");
let choicesElement = document.getElementById("choices");
let playerRete = document.getElementById("playerRete");
let audioBox = document.getElementById("audioBox");
let currentQuestion = 0;
let correctAnswers = 0;
function showQuestion() {
    let question = questions[currentQuestion];
    questionElement.textContent = `السؤال: ${question.question}`;
    choicesElement.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
        let button = document.createElement("button");
        button.textContent = question.choices[i];
        button.addEventListener("click", checkAnswer);
        choicesElement.appendChild(button);
    };
};
let isDeleted = false;
btnSpeacker.onclick = function () {
    if (isDeleted) {
        document.body.appendChild(audioBox);
        isDeleted = false;
        btnSpeacker.innerHTML = `<i class="fa-solid fa-volume-high"></i> تشغيل الصوت`;
    } else {
        audioBox.remove();
        isDeleted = true;
        btnSpeacker.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> اطفاء الصوت`;
    };
};
function checkAnswer(event) {
    let selectedChoice = event.target.textContent;
    let question = questions[currentQuestion];
    if (selectedChoice === question.correctAnswer) {
        correctAnswers++;
        playerRete.innerText = "👍 جدع";
        audioBox.innerHTML = `<audio src="Audio/good.mp3" autoplay></audio>`;
    } else {
        playerRete.innerText = "👎 غلط";
        audioBox.innerHTML = `<audio src="Audio/Bad.mp3" autoplay></audio>`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = `انتهينا! الأسئلة المجابة: ${correctAnswers} من ${questions.length}`;
        choicesElement.innerHTML = "";
        if (correctAnswers === questions.length) {
            playerRete.innerText = "😍 الله اكبر عليك";
            audioBox.innerHTML = `<audio src="Audio/All Bad.mp3" autoplay></audio>`;
        } else {
            audioBox.innerHTML = `<audio src="Audio/All Good.mp3" autoplay></audio>`;
            playerRete.innerText = "💩 أنا وسط شويه معاتية بقي"
        };
    };
};
showQuestion();
let menuBtn = document.getElementById("menuBtn");
let mainBox = document.getElementById("main");
let menuBox = document.getElementById("menuBox");
let menuBtnClose = document.getElementById("menuBtnClose");
let menuBtnFullClose = document.getElementById("menuBtnFullClose");
menuBtn.onclick = function () {
    menuBtn.classList.add("open");
    muneBtnSmoll.classList.add("muneBtnSmollOpen");
    menuBox.style.display = "flex";
    mainBox.style.display = "none";
};
menuBtnClose.onclick = function () {
    menuBtn.classList.remove("open");
    muneBtnSmoll.classList.remove("muneBtnSmollOpen");
    menuBox.style.display = "none";
    mainBox.style.display = "flex";
    menuForm.style.display = "none";
};
menuBtnFullClose.onclick = function () {
    menuBtn.classList.remove("open");
    muneBtnSmoll.classList.remove("muneBtnSmollOpen");
    mainBox.style.display = "flex";
    menuBox.style.display = "none";
    menuForm.style.display = "none";
};
let menuBtnContact = document.getElementById("menuBtnContact");
let menuForm = document.getElementById("menuForm");
menuBtnContact.onclick = function () {
    if (menuForm.style.display === "none") {
        menuForm.style.display = "flex";
    } else {
        menuForm.style.display = "none";
    };
};

function ContactInput() {
    window.localStorage.setItem("ContactText", ContactInputs.value);
}
ContactInputs.value = window.localStorage.getItem("ContactText");
let menuBtnRate = document.getElementById("menuBtnRate");
let menuRateBox = document.getElementById("menuRateBox");
let menuRateBoxClose = document.getElementById("menuRateBoxClose");
let menuRateBoxFullClose = document.getElementById("menuRateBoxFullClose");
menuBtnRate.onclick = function () {
    menuRateBox.style.display = "flex";
    menuBox.style.display = "none";
    menuForm.style.display = "none";
}
menuRateBoxClose.onclick = function () {
    menuBtn.classList.remove("open");
    muneBtnSmoll.classList.remove("muneBtnSmollOpen");
    menuRateBox.style.display = "none";
    mainBox.style.display = "flex";
    menuForm.style.display = "none";
};
menuRateBoxFullClose.onclick = function () {
    menuBtn.classList.remove("open");
    muneBtnSmoll.classList.remove("muneBtnSmollOpen");
    menuRateBox.style.display = "none";
    mainBox.style.display = "flex";
    menuForm.style.display = "none";
};
let menuTitle = document.getElementById("menuTitle");
let currentDate = new Date();
let arabicMonths = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
let day = currentDate.getDate();
let month = arabicMonths[currentDate.getMonth()];
menuTitle.textContent = `${day} ${month}`;
// =====================================================
let logo = document.getElementById("logo");
let mainText = document.getElementById("mainText");
let mainContent = document.getElementById("mainContent");
logo.onclick = function () {
    if (mainText.style.display === "none") {
        mainContent.style.display = "none";
        mainText.style.display = "flex";
    } else {
        mainContent.style.display = "block";
        mainText.style.display = "none";
    };
};
// =====================================================
let menuRateBoxBack = document.getElementById("menuRateBoxBack");
menuRateBoxBack.onclick = function () {
    menuRateBox.style.display = "none";
    mainBox.style.display = "none";
    menuForm.style.display = "none";
    menuBox.style.display = "flex";
};
let muneBtnSmoll = document.getElementById("muneBtnSmoll");
muneBtnSmoll.onclick = function () {
    muneBtnSmoll.classList.add("muneBtnSmollOpen");
    menuBox.style.display = "flex";
    mainBox.style.display = "none";
};
let resetForm = document.getElementById("resetForm");
resetForm.onclick = function () {
    resetForm.style.backgroundColor = "rgba(0 0 0 / 30%)";
    resetForm.style.borderColor = "rgba(0 0 0 / 30%)";
    setTimeout(function () {
        resetForm.style.backgroundColor = "rgba(0 0 0 / 0%)";
    }, 300);
    setTimeout(function () {
        resetForm.style.borderColor = "rgba(0 0 0 / 0%)";
    }, 350);
    ContactInputs.value = "";
    window.localStorage.setItem("ContactText", "");
};