// variables with let keyword => ES6 Feature=> block scope {}

 let topic = 'variable outside block scope';
//let topic;   // variable with 'let' can't be re-declared in same scope
 if(topic){
    let topic = 'variable inside block scope'; // both 'topic' variable will have seperate scope.  will not pollute each other's scope

    console.log(topic) //  variable inside block scope
 }
 console.log(topic); // variable outside block scope