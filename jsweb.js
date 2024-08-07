document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Harper Austin";
    const text2= "2nd year CS Student at Brown University";
    const text3= "Type one of these commands to learn more:"
    const text4= "-ABT -----> About me, general info"
    const text5= "-EDU -----> Education: Courses, Clubs, Activities"
    const text6= "-WRK -----> Work Experience"
    const text7= "-PRJ -----> Projects"
    const text8= "-SKL -----> Languages, skills"
    const text9= "-COT -----> Contact info, Resume, GitHub, LinkedIn"
    const text10= "-FUN -----> Hobbies, Interests, Fun facts"

    const textABT = 
    "-> Hello, I am Harper Austin and I am from Keller, TX. I am eager to use my technical skills, problem-solving ability, and creative mind to construct effective intersections between technology and fields such as the environment, sports, design, and media."
    const textNOT = "-> Command not recognized."

    const textEDU = 
    "-> Pursuing a Bachelor of Science in Computer Science at Brown University.\n-> Relevant Courses: Object-Oriented Programming, Program Design with Data Structures and Algorithms, Discrete Structures and Probability, Foundations of AI, Computer Systems.\n-> Clubs: Machine Intelligence Community, Men's Club Soccer.\n-> Current Undergraduate Teaching Assistant for CSCI 0150: Object-Oriented Programming."

    const textWRK = "-> Outlier.AI, AI Evaluator (Contract), May 2024 - Present\n  --> Evaluated the ability of LLMs to generate code for a specific user request, debugging, correcting, and explaining issues in order to improve model correctness.\n\n-> Labelbox, AI Tutor (Contract), June 2024 - Present\n  --> Assessed and compared the correctness and completeness of AI-generated responses from models such as Claude 3.5 Sonnet and Gemini 1.5 Pro to fulfill prompts with complex mathematical requests (calculus, number theory, linear algebra)."

    const textPRJ = "-> Get Productive, iOS Application, Swift\n  --> Used Swift and SwiftUI to develop and deploy Get Productive, a gamified productivity app with over 300 users. Links: ,  \n\n-> Code Librarian, Python\n --> Book recommendation program that finds you 3 different books, using 3 different technqiues, based on one input book: (1) Content similarites using natural language processing (spaCy), (2) web-scraping (Selenium), (3) Statistical analysis with various readability scores. \n --> Integrated openAI API to generate thorough explanations of each book recommendation.  \n\n -> Attacking or Defensive NN, Python\n --> A small neural network consisting of 2 input nodes, 1 hidden layer (with 2 nodes) and 1 output node. This neural network determines if a soccer player is an attacking or defensive player based on goals per game and assists per game.  "

    const textSKL = "-> Languages: Python, Java, Swift, HTML, CSS, JavaScript, SwiftUI, Lean. Version Control: Git, GitHub."

    const textFUN = "-> I've played soccer since I was 3 years old and it's still my favorite sport.\n-> I love traveling and the outdoors. I plan on going to Yellowstone or Yosemite for the first time in the coming years.\n-> I enjoy reading in my free time. My favorite author at the moment is Haruki Murakami."

    const textCOT = "-> Email: jharpaustin@gmail.com\n-> \n->  \n->  "

    const typingtext1 = document.getElementById("title");
    const typingtext2 = document.getElementById("about");
    const typingtext3 = document.getElementById("commands");
    const typingtext4 = document.getElementById("command1")
    const typingtext5 = document.getElementById("command2")
    const typingtext6 = document.getElementById("command3")
    const typingtext7 = document.getElementById("command4")
    const typingtext8 = document.getElementById("command5")
    const typingtext9 = document.getElementById("command6")
    const typingtext10 = document.getElementById("command7")
    const output = document.getElementById("info")
    let index = 0;
    let indexABT = 0;
    let indexNOT = 0;
    let indexEDU = 0;
    let indexWRK = 0;
    let indexPRJ = 0;
    let indexSKL = 0;
    let indexFUN = 0;
    let indexCOT = 0;

    function typeOut() {
        if (index < text1.length){
            typingtext1.textContent += text1.charAt(index);
            index++;
            setTimeout(typeOut, 60);
        } else {
            index = 0;
            setTimeout(typeOut2, 600)
        }
    }

    function typeOut2(){
        if (index < text2.length){
            typingtext2.textContent += text2.charAt(index);
            index++;
            setTimeout(typeOut2,60)
        } else {
            index = 0;
            setTimeout(typeOut3, 600)
        }
    }

    function typeOut3(){
        if (index < text3.length){
            typingtext3.textContent += text3.charAt(index)
            index++;
            setTimeout(typeOut3,60)
        } else {
            index = 0;
            setTimeout(typeOut4, 600)
        }
    }


    function typeOut4(){
        if (index < text4.length){
            typingtext4.textContent += text4.charAt(index)
            index++;
            setTimeout(typeOut4,30)
        } else {
            index = 0;
            setTimeout(typeOut5, 50)
        }
    }

    function typeOut5(){
        if (index < text5.length){
            typingtext5.textContent += text5.charAt(index)
            index++;
            setTimeout(typeOut5,30)
        } else {
            index = 0;
            setTimeout(typeOut6, 50)
        }
    }

    function typeOut6(){
        if (index < text6.length){
            typingtext6.textContent += text6.charAt(index)
            index++;
            setTimeout(typeOut6,30)
        } else {
            index = 0;
            setTimeout(typeOut7, 50)
        }
    }

    function typeOut7(){
        if (index < text7.length){
            typingtext7.textContent += text7.charAt(index)
            index++;
            setTimeout(typeOut7,30)
        } else {
            index = 0;
            setTimeout(typeOut8, 50)
        }
    }

    function typeOut8(){
        if (index < text8.length){
            typingtext8.textContent += text8.charAt(index)
            index++;
            setTimeout(typeOut8,30)
        } else {
            index = 0;
            setTimeout(typeOut9, 50)
        }
    }
    function typeOut9(){
        if (index < text9.length){
            typingtext9.textContent += text9.charAt(index)
            index++;
            setTimeout(typeOut9,30)
        } else {
            index = 0;
            setTimeout(typeOut10, 50)
        }
    }
    function typeOut10(){
        if (index < text10.length){
            typingtext10.textContent += text10.charAt(index)
            index++;
            setTimeout(typeOut10,30)
        } else {
            index = 0;
            textarea.value = prompt
            textarea.disabled = false;
        }
    }

    function typeABT(){
        if (indexABT < textABT.length) {
            output.textContent += textABT.charAt(indexABT);
            indexABT++;
            setTimeout(typeABT, 20);
        } else {
            textarea.disabled = false;
            indexABT = 0;
        }
    }

    function typeNOT(){
        if (indexNOT < textNOT.length) {
            output.textContent += textNOT.charAt(indexNOT);
            indexNOT++;
            setTimeout(typeNOT, 30);
        } else {
            textarea.disabled = false;
            indexNOT = 0;
        }
    }

    function typeEDU(){
        if (indexEDU < textEDU.length) {
            output.textContent += textEDU.charAt(indexEDU);
            indexEDU++;
            setTimeout(typeEDU,30);
        } else {
            textarea.disabled = false;
            indexEDU = 0;
        }
    }

    function typeWRK(){
        if (indexWRK < textWRK.length) {
            output.textContent += textWRK.charAt(indexWRK);
            indexWRK++;
            setTimeout(typeWRK,30);
        } else {
            textarea.disabled = false;
            indexWRK = 0;
        }
    }

    function typeSKL(){
        if (indexSKL < textSKL.length) {
            output.textContent += textSKL.charAt(indexSKL);
            indexSKL++;
            setTimeout(typeSKL,30);
        } else {
            textarea.disabled = false;
            indexSKL = 0;
        }
    }

    function typeFUN(){
        if (indexFUN < textFUN.length) {
            output.textContent += textFUN.charAt(indexFUN);
            indexFUN++;
            setTimeout(typeFUN,30);
        } else {
            textarea.disabled = false;
            indexFUN = 0;
        }
    }


    function typeCOT(){
        if (indexCOT < textCOT.length) {
            if (output.textContent == "-> Email: jharpaustin@gmail.com\n-> ") {
                output.innerHTML += '<a href="https://harper-austin-resume.tiiny.site" target="_blank">Resume<\a>'
            }

            if (output.textContent === "-> Email: jharpaustin@gmail.com\n-> Resume\n-> ") {
                output.innerHTML += `<a href="https://www.linkedin.com/in/harper-austin-523743276/" target="_blank">LinkedIn</a>`
            }

            if (output.textContent === "-> Email: jharpaustin@gmail.com\n-> Resume\n-> LinkedIn \n-> "){
                output.innerHTML += `<a href="https://github.com/harperaustin" target="_blank">GitHub</a>`
                
            }

            output.innerHTML+= textCOT.charAt(indexCOT);
            indexCOT++;
            setTimeout(typeCOT,30);
        } else {
            textarea.disabled = false;
            indexCOT = 0;
        }
    }

    function typePRJ(){
        if (indexPRJ < textPRJ.length) {
            if (output.textContent === "-> Get Productive, iOS Application, Swift\n  --> Used Swift and SwiftUI to develop and deploy Get Productive, a gamified productivity app with over 300 users. Links: "){
                output.innerHTML += `<a href="https://apps.apple.com/us/app/get-productive/id6499282666?itsct=apps_box_link&itscg=30200" target="_blank">App Store</a>`
            }

            if (output.textContent === "-> Get Productive, iOS Application, Swift\n  --> Used Swift and SwiftUI to develop and deploy Get Productive, a gamified productivity app with over 300 users. Links: App Store, "){
                output.innerHTML += `<a href="https://github.com/harperaustin/GetProductiveApp" target="_blank">Source Code</a>`
            }

            if (output.textContent === "-> Get Productive, iOS Application, Swift\n  --> Used Swift and SwiftUI to develop and deploy Get Productive, a gamified productivity app with over 300 users. Links: App Store, Source Code \n\n-> Code Librarian, Python\n --> Book recommendation program that finds you 3 different books, using 3 different technqiues, based on one input book: (1) Content similarites using natural language processing (spaCy), (2) web-scraping (Selenium), (3) Statistical analysis with various readability scores. \n --> Integrated openAI API to generate thorough explanations of each book recommendation. ") {
                output.innerHTML += `<a href="https://github.com/harperaustin/CodeLibrarian" target="_blank">Source Code</a>`
            }

            if (output.textContent === "-> Get Productive, iOS Application, Swift\n  --> Used Swift and SwiftUI to develop and deploy Get Productive, a gamified productivity app with over 300 users. Links: App Store, Source Code \n\n-> Code Librarian, Python\n --> Book recommendation program that finds you 3 different books, using 3 different technqiues, based on one input book: (1) Content similarites using natural language processing (spaCy), (2) web-scraping (Selenium), (3) Statistical analysis with various readability scores. \n --> Integrated openAI API to generate thorough explanations of each book recommendation. Source Code \n\n -> Attacking or Defensive NN, Python\n --> A small neural network consisting of 2 input nodes, 1 hidden layer (with 2 nodes) and 1 output node. This neural network determines if a soccer player is an attacking or defensive player based on goals per game and assists per game. ") {
                output.innerHTML += `<a href="https://github.com/harperaustin/Att-or-Def-Neural-Network" target="_blank">Source Code</a>`
            }
            output.innerHTML += textPRJ.charAt(indexPRJ);
            indexPRJ++;
            setTimeout(typePRJ,30);
        } else {
            textarea.disabled = false;
            indexPRJ = 0;
        }
    }


    function processCommand(command) {
        output.innerText = ""
        switch (command) {
            case "> ABT":
                typeABT();
                break;
            case "> EDU":
                typeEDU();
                break;
            case "> WRK":
                typeWRK();
                break;
            case "> PRJ":
                typePRJ();
                break;
            case "> SKL":
                typeSKL();
                break;
            case "> FUN":
                typeFUN();
                break;
            case "> COT":
                typeCOT();
                break;
            default: 
                typeNOT();
                break;
        }
    }

    const textarea = document.getElementById("input");
    const prompt = '> ';


    textarea.addEventListener('input', (e) => {
        const inputValue = e.target.value;
        if(!inputValue.startsWith(prompt)) {
            if(inputValue.startsWith(">")){
                e.target.value = prompt + inputValue.replace(">", '');
            } else if(inputValue.startsWith(" ")){
                e.target.value = prompt + inputValue.replace(" ", '');
            }
        }
    })

    textarea.addEventListener('keydown', (e)=> {
        const inputValue = e.target.value;
        
        if ((e.key === 'Backspace' || e.key === 'Delete') && inputValue === prompt) {
            e.preventDefault();
        }

        if(e.key === 'Enter') {
            const command = textarea.value.toUpperCase();
            textarea.disabled = true;
            processCommand(command);
            textarea.value = "> "
        }

    })

    

    typeOut();
});


