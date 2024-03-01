let mathOp = document.querySelector("#mathOperations");
        let currentCard = null;

        function newCard(operation) {
            if (currentCard) {
                mathOp.removeChild(currentCard);
            }

            let card = document.createElement("div");
            card.className = "card_face_operation";
            mathOp.appendChild(card);

            let cardTitle = document.createElement("h2");
            cardTitle.textContent = operation;
            card.appendChild(cardTitle);

            let cardContent = document.createElement("div");
            cardContent.className = "card_content_operation";
            card.appendChild(cardContent);

            let cardBody = document.createElement("div");
            cardBody.className = "card_body_operation";
            cardContent.appendChild(cardBody);

            let cardList = document.createElement("ul");
            cardBody.appendChild(cardList);

           
            let listItems = [];

            if (operation === "TOPLAMA (+)") {
                listItems = [
                    "Basit Toplama (1-10)",
                    "Basit Toplama (1-20)",
                    "Eldeli Toplama",
                    "2 Basamaklı Toplama",
                    "3 Basamaklı Toplama"
                ];
            } else if (operation === "ÇIKARMA (-)") {
                listItems = [
                    "Basit Çıkarma (1-10)",
                    "Basit Çıkarma (1-20)",
                    "Onluk Bozma",
                    "2 Basamaklı Çıkarma",
                    "3 Basamaklı Çıkarma"
                ];
            } else if (operation === "ÇARPMA (X)") {
                listItems = [
                    "1-5 Arası Çarpma",
                    "6-10 Arası Çarpma",
                    "2 Basamaklı Çarpma",
                    "3 Basamaklı Çarpma"
                ];
            } else if (operation === "BÖLME (÷)") {
                listItems = [
                    "Basit Bölme",
                    "Kalansız Bölme"
                ];
            }

            listItems.forEach(item => {
                let listItem = document.createElement("li");
                listItem.textContent = item;
                listItem.onclick = () => createNewDiv(item);
                cardList.appendChild(listItem);
            });

            currentCard = card;
        }

        function createNewDiv(item) {
            let secondCol = document.querySelector(".col:nth-child(2)");
        
            let existingDivs = secondCol.querySelectorAll(".new-div");
            existingDivs.forEach(div => div.remove());
        
            let newDiv = document.createElement("div");
            newDiv.textContent =  item;
            newDiv.className = "new-div";
            secondCol.appendChild(newDiv);
        
            switch (item) {
                case "Basit Toplama (1-10)":
                    generateRandomAdditionsOneToTen();
                    break;
                case "Basit Toplama (1-20)":
                    generateRandomAdditionsOneToTwenty();
                    break;
                case "Eldeli Toplama":
                    generateRandomAdditionsTwoNumbers();
                    break;
                case "2 Basamaklı Toplama":
                    generateRandomAdditionsTwoDigits();
                    break;
                case "3 Basamaklı Toplama":
                    generateRandomAdditionsThreeDigits();
                    break;
                case "Basit Çıkarma (1-10)":
                    generateRandomSubtractionOnetoTen();
                    break;
                case "Basit Çıkarma (1-20)":
                    generateRandomSubtractionOnetoTwenty();
                    break;
                case "Onluk Bozma":
                    generateRandomSubtractionTwoDigits();
                    break;
                case "2 Basamaklı Çıkarma":
                    generateRandomSubtractionTwoNumbers();
                    break;
                case "3 Basamaklı Çıkarma":
                    generateRandomSubtractionThreeDigits();
                    break;
                case "1-5 Arası Çarpma":
                    generateRandomMultiplesOneToFive();
                    break;
                case "6-10 Arası Çarpma":
                    generateRandomMultiplicationSixToTen();
                    break;
                case "2 Basamaklı Çarpma":
                    generateRandomMultiplicationTwoDigits();
                    break;
                case "3 Basamaklı Çarpma":
                    generateRandomMultiplicationThreeDigits();
                    break;
                case "Basit Bölme":
                    generateRandomDivisionUpToHundred();
                    break;
                case "Kalansız Bölme":
                    generateRandomDivisionUpToThousand();
                    break;
                default:
                   
                    break;
            }
        }
        
   
        function createQuestionContainer(num1, num2, operation) {
            let container = document.createElement("div");
            container.className = `question-result-container ${operation}`;

            let questionContainerWrapper = document.createElement("div");
            questionContainerWrapper.appendChild(createQuestionContainerContent(num1, num2, operation));
          
            container.appendChild(questionContainerWrapper);
          
            return container;
          }


          function createQuestionContainerContent(num1, num2, operation) {
            let questionContainer = document.createElement("div");
            questionContainer.className = "question-container";
          
            let operator;
            switch (operation) {
              case "subtraction":
                operator = "-";
                break;
              case "multiplication":
                operator = "x";
                break;
              case "division":
                operator= "/"
                break;
              default:
                operator = "+";
            }
          
            questionContainer.innerHTML = `<span class='num1'>${num1}</span> ${operator} <span class='num2'>${num2}</span> = <input type='text' class='answer'></input>`;
          
            return questionContainer;
          }


        function generateRandomAdditionsOneToTen() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 10) + 1;
              let num2 = Math.floor(Math.random() * 10) + 1;
          
              let container = createQuestionContainer(num1, num2);
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
        }
        
        function generateRandomAdditionsOneToTwenty() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 20) + 1;
              let num2 = Math.floor(Math.random() * 20) + 1;
          
              let container = createQuestionContainer(num1, num2);
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomAdditionsTwoDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 90) + 10;
              let num2 = Math.floor(Math.random() * 90) + 10;
          
              let container = createQuestionContainer(num1, num2);
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          
          function generateRandomAdditionsTwoNumbers() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = '';
          
            for (let i = 0; i < 10; i++) {
              let [num1, num2] = generateTwoNumbers(); 
          
              while (num1 + num2 > 100) {
                [num1, num2] = generateTwoNumbers(); 
              }
          
              let container = createQuestionContainer(num1, num2);
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateTwoNumbers() {
            let num1, num2;
          
          
            do {
              num1 = Math.floor(Math.random() * 90) + 10;
            } while (![5,6, 7, 8, 9].includes(num1 % 10));
          
            let possibleEndings = [2, 3, 4,5, 6];
            do {
              num2 = Math.floor(Math.random() * 90) + 10;
            } while (!possibleEndings.some(ending => num2 % 10 >= ending));
          
            return [num1, num2];
          }
          
          function generateRandomAdditionsThreeDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 900) + 10;
              let num2 = Math.floor(Math.random() * 900) + 10;
          
              let container = createQuestionContainer(num1, num2);
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomSubtractionOnetoTen() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1, num2;
          
              do {
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 10) + 1;
              } while (num1 < num2);
          
              let container = createQuestionContainer(num1, num2, "subtraction");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }

          function generateRandomSubtractionOnetoTwenty() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1, num2;
          
              do {
                num1 = Math.floor(Math.random() * 20) + 1;
                num2 = Math.floor(Math.random() * 20) + 1;
              } while (num1 < num2);
          
              let container = createQuestionContainer(num1, num2, "subtraction");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          
          function generateRandomSubtractionTwoNumbers() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1, num2;
          
              do {
                num1 = Math.floor(Math.random() * 90) + 10;
                num2 = Math.floor(Math.random() * 90) + 10;
              } while (num1 <= num2 || num1 % 10 < num2 % 10);
          
              let container = createQuestionContainer(num1, num2, "subtraction");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomSubtractionTwoDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1, num2;
          
              do {
                num1 = Math.floor(Math.random() * 90) + 1;
                num2 = Math.floor(Math.random() * 90) + 1;
              } while (num1 < num2);
          
              let container = createQuestionContainer(num1, num2, "subtraction");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomSubtractionThreeDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1, num2;
          
              do {
                num1 = Math.floor(Math.random() * 900) + 1;
                num2 = Math.floor(Math.random() * 900) + 1;
              } while (num1 < num2);
          
              let container = createQuestionContainer(num1, num2, "subtraction");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }

          function generateRandomMultiplesOneToFive() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 5) + 1;
              let num2 = Math.floor(Math.random() * 5) + 1;
          
              // Çarpma işlemi olarak belirtilmeli
              let container = createQuestionContainer(num1, num2, "multiplication");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomMultiplicationSixToTen() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 5) + 6;  
              let num2 = Math.floor(Math.random() * 5) + 6;  
          
              let container = createQuestionContainer(num1, num2, "multiplication");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomMultiplicationTwoDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 90) + 1;  
              let num2 = Math.floor(Math.random() * 90) + 1;  
          
              let container = createQuestionContainer(num1, num2, "multiplication");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomMultiplicationThreeDigits() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let num1 = Math.floor(Math.random() * 900) + 1;  
              let num2 = Math.floor(Math.random() * 900) + 1;  
          
              let container = createQuestionContainer(num1, num2, "multiplication");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }

          function generateRandomDivisionUpToHundred() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let result = Math.floor(Math.random() * 10) + 1;  
              let num2 = Math.floor(Math.random() * 10) + 1;   
              let num1 = result * num2; 
          
              let container = createQuestionContainer(num1, num2, "division");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
          
          function generateRandomDivisionUpToThousand() {
            let questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; 
          
            for (let i = 0; i < 10; i++) {
              let divisor = Math.floor(Math.random() * 100) + 1;  // Kalansız bölünebilen bir sayı
              let num2 = Math.floor(Math.random() * 10) + 1;       // İkinci sayı 1 ile 10 arasında bir sayı
              let num1 = divisor * num2;                            // İlk sayıyı hesapla
          
              let container = createQuestionContainer(num1, num2, "division");
              questionsDiv.appendChild(container);
            }
          
            addCheckAnswerButton(questionsDiv);
          }
        

        let addLink = document.querySelector(".sum-link");
        let subLink = document.querySelector(".sub-link");
        let multiLink = document.querySelector(".multi-link");
        let divLink = document.querySelector(".div-link");


        addLink.addEventListener("click", () => newCard("TOPLAMA (+)"));
        subLink.addEventListener("click", () => newCard("ÇIKARMA (-)"));
        multiLink.addEventListener("click", () => newCard("ÇARPMA (X)"));
        divLink.addEventListener("click", () => newCard("BÖLME (÷)"));


        function addCheckAnswerButton(questionsContainer) {
            let checkButton = document.createElement("button");
            checkButton.className = "checkButton";
            checkButton.textContent = "Kontrol Et";
            checkButton.addEventListener("click", checkAnswers);
            questionsContainer.appendChild(checkButton);
          }
          
          function checkAnswers() {
            let questionContainers = document.querySelectorAll(".question-result-container");
          
            questionContainers.forEach((container) => {
              let userAnswer = container.querySelector(".answer").value.trim();
              let num1 = parseInt(container.querySelector(".num1").innerText);
              let num2 = parseInt(container.querySelector(".num2").innerText);
              let operation;
          
              if (container.classList.contains("subtraction")) {
                operation = "subtraction";
              } else if (container.classList.contains("multiplication")) {
                operation = "multiplication";
              } else if (container.classList.contains("division")) {
                operation = "division";
              } else {
                operation = "addition";
              }
          
              let resultContainer = document.createElement("div");
              resultContainer.className = "result-container";
          
              let resultIcon = document.createElement("span");
              resultIcon.className = "result-icon";
          
              if (userAnswer === "") {
                resultIcon.innerHTML = "&#63;";
                resultIcon.style.color = "blue";
              } else {
                let correctAnswer = calculateCorrectAnswer(num1, num2, operation);
                if (parseInt(userAnswer) === correctAnswer) {
                  resultIcon.innerHTML = "&#10004;";
                  resultIcon.style.color = "green";
                } else {
                  resultIcon.innerHTML = "&#10008;"; 
                  resultIcon.style.color = "red";
                }
              }
          
              resultContainer.appendChild(resultIcon);
          
              let questionContainer = container.querySelector(".question-container");
              questionContainer.appendChild(resultContainer);
            });
          }
          
          
          
          
          
          
          
          function calculateCorrectAnswer(num1, num2, operation) {
            switch (operation) {
              case "addition":
                return num1 + num2;
              case "subtraction":
                return num1 - num2;
              case "multiplication":
                return num1 * num2;
              case "division":
              
                return num2 !== 0 ? num1 / num2 : NaN;
              default:
               
                return num1 + num2;
            }
          }

