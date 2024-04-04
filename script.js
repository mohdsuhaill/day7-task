
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a. Get all the countries from Asia continent /region using Filter function
/*
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
    var final = res.map((ele)=>console.log(ele.name.common))
}*/

// b.Get all the countries with a population of less than 2 lakhs using Filter function
/* const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data = request.response;
    var result = JSON.parse(data);
    var res = result.filter((ele)=>ele.population<200000)
    console.log(res);
}*/

// c.Print the following details name, capital, flag, using forEach function...
/*const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data = request.response;
    var result = JSON.parse(data);
    // console.log(result);
    var res = result.forEach((ele)=>console.log(ele.name.common,ele.capital,ele.flags.png));
}*/

// d.Print the total population of countries using reduce function
/*const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data = request.response;
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(res);
}*/

// e.Print the country that uses US dollars as currency...

/* const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data = request.response;
    var result = JSON.parse(data);
//  console.log(result);
    var curr = result.filter((ele)=>ele.currencies && ele.currencies.USD)
    curr.forEach((key)=>console.log(key.name.common))

}*/
