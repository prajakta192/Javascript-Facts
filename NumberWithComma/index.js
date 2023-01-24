//3 methods to format no. with comma 
/* toLocaleString()*/

const NumberWithComma = (num) =>{
    const date = new Date();
    const dateResult = date.toLocaleString();
    console.log(dateResult);

    const result = num.toLocaleString('en-IN', {maximumFractionDigits : 2});
    console.log(result)
}
//Passing whole no.
//NumberWithComma(12324345465456)

//floating point no.
//NumberWithComma(2324324.89476954567); 


/*Intl.NumberFormat() */

const formatNumberWithComma = (num) =>{
    //without paramaters
    //const number = new Intl.NumberFormat().format(num);

    //with parameters
    const number = new Intl.NumberFormat('en-IN',{maximumFractionDigits : 3}).format(num);
    console.log(number)
}
  formatNumberWithComma(12324345465456);
  formatNumberWithComma(2324324.2323243)

  //Using regular expressions to format numbers with commas
  const regexNumberWithComma = (num) => {
    const result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')  ;
    console.log(result)
  }
  regexNumberWithComma(2324324.2323243)