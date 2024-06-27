document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Harper Austin";
    const text2= "2nd year CS Student at Brown University";
    const typingtext1 = document.getElementById("title");
    const typingtext2 = document.getElementById("about")
    let index1 = 0;
    let index2 = 0;
    function typeOut() {
        if (index1 < text1.length){
            typingtext1.textContent += text1.charAt(index1);
            index1++;
            setTimeout(typeOut, 100);
        } else {
            setTimeout(typeOut2, 600)
        }
    }

    function typeOut2(){
        if (index2 < text2.length){
            typingtext2.textContent += text2.charAt(index2);
            index2++;
            setTimeout(typeOut2,100)
        }
    }

    typeOut();
});