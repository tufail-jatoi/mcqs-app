

    var quizData = [
        {
          question: "Ques 1: What is multiply of 2+4 ?",
          a: "8",
          b: "5",
          c: "6",
          d: "8.1",
          correct: "a",
        },
        {
          question: "Ques 2: How many prayers are there in a day?",
          a: "6",
          b: "11",
          c: "15",
          d: "5",
          correct: "c",
        },
        {
          question: "Ques 3: which is the national animal of pakistan ?",
          a: " deer",
          b: " horse",
          c: " cat",
          d: " Markhor",
          correct: "c",
        },
        {
          question: "Ques 4: What do you call a type of shape that has no sides ?",
          a: "circle",
          b: " Rectangle ",
          c: "Triangle",
          d: "Square",
          correct: "a",
        },
        {
          question: "Ques 5: Which is the Hotest Planet in the galaxy ?",
          a: "urenus",
          b: "mars",
          c: "jupiter ",
          d: "sun",
          correct: "c",
        },
        {
            question: "Ques 6: The strogest army in the world ?",
            a: "BTS Army",
            b: "Indian Army",
            c: "Afgani Army",
            d: "Pakistani Army",
            correct: "d",
          },
          {
            question: "Ques 7: Who is the founder of pakistan ?",
            a: "Quaid e azam",
            b: "Dj Bravo",
            c: "Tarak Mehta",
            d: "shinchen",
            correct: "a",
          },
          {
            question: "Ques 8: What is an LCD made of?",
            a: "lemon Juice",
            b: "shampoo",
            c: "Liquid Crystals",
            d: "water",
            correct: "c",
          },
          {
          question: "Ques 9: Which of these is a computer game?",
          a: "Photoshop",
          b: "inpage",
          c: "football",
          d: "GTA Viceci0ty",
          correct: "d",
        },
        {
            question: "Ques 10: Inside which folder  do we put the files for firbase ?",
            a: "public",
            b: "home",
            c: "unnamed",
            d: "files ",
            correct: "a",
          },
      ];
      
      var answerEls = document.querySelectorAll(".answer");
      var aText = document.getElementById("aText");
      var bText = document.getElementById("bText");
      var cText = document.getElementById("cText");
      var dText = document.getElementById("dText");
      var questionEl = document.getElementById("question");
      var submitBtn = document.getElementById("submit");
      
      var currentQuiz = 0;
      var score = 0;
      
      quizLoad();
      
      function quizLoad() {
        deSelectInput();
      
        var currentQuizData = quizData[currentQuiz];
      
        questionEl.innerText = currentQuizData.question;
        aText.innerText = currentQuizData.a;
        bText.innerText = currentQuizData.b;
        cText.innerText = currentQuizData.c;
        dText.innerText = currentQuizData.d;
      }
      
      function getSelection() {
        var answer = undefined;
      
        answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
            answer = answerEl.id;
          }
        });
        return answer;
      }
      
      function deSelectInput() {
        answerEls.forEach((answer) => {
          answer.checked = false;
        });
      }
      
      submitBtn.addEventListener("click", () => {
        var answer = getSelection();
      
        if (answer) {
          if (answer === quizData[currentQuiz].correct) {
            score++;
          }
      
          currentQuiz++;
      
          if (currentQuiz < quizData.length) {
            quizLoad();
          } else {
            alert(`You've scored ${score} / ${quizData.length}`);
            location.reload();
          }
        }
      });
      