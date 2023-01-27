//js variables

//global scope => declare with var keyword

//variables declared with var keyword can be re-declared & re-assigned

var topic = 'js global scope variable';
var topic;  // variable with 'var' can be re-declared in same scope

if(topic){
     topic = 're-assining value to variable';
    //var topic = 're-assining value to variable';   // both will produce same result
    console.log(topic)
}

console.log(topic);

