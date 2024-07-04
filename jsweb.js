document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Harper Austin";
    const text2= "2nd year CS Student at Brown University";
    const text3= "Type one of these commands to learn more:"
    const text4= "-ABT -----> About me, general info"
    const text5= "-EDU -----> Education: Courses, Clubs, Activities"
    const text6= "-WRK -----> Work Experience"
    const text7= "-PRJ -----> Projects"
    const text8= "-SKL -----> Skills, Languages, Certifications"
    const text9= "-COT -----> Contact info, Resume, GitHub"
    const text10= "-FUN -----> Hobbies, Interests, Fun facts"
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
    let index = 0;
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
            processCommand(command);
            textarea.value = "> "
        }

    })

    function processCommand(command) {
        switch (command) {
            case "> ABT":
                document.getElementById("info").textContent = "About Me"
                break;
            default: 
                document.getElementById("info").textContent = "Command not recognized."
                break;
        }
       
    }

    typeOut();
});


