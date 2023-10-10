function hi(greet, person){ // when hi is called, write out the program below
    document.write("<br>" + greet + ", " + person);
}



hi("Hello", "human"); // greet is hello and person is human
hi("Hola", "friend");// greet is hola and person is friend

function name(){
    var first= prompt("What is your name?"); // prompt text to ask name
    var second = prompt("What are do you like to do?");// prompt text to ask what they like to do
   
    
    alert("your name is " + first + " and you like " + second + "!");
}
name(); // call for name

function age(){
    var age1= prompt("How old are you?"); // prompt for an age
    if (age1 >= 18){ // if they are 18 or above, call them an adult
        alert("You're an adult!");
    }
    else { // if they are below 17, call them a child
        alert("You're a child!");
    }
}

