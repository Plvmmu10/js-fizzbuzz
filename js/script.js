// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


for (let i = 1; i <= 100; i++){

    // multiples of 3 and 5
    if((i % 3 === 0) && (i % 5 === 0)){
        document.getElementById("box").innerHTML +=`<div class="fizzBuzz rounded-2"><strong>FizzBuzz</strong></div>`;
    
    // multiples of 3
    }else if(i % 3 === 0){
        document.getElementById("box").innerHTML +=`<div class="fizz rounded-2"><strong>Fizz</strong></div>`;
    
    // multiples of 5
    }else if(i % 5 === 0){
        document.getElementById("box").innerHTML +=`<div class="buzz rounded-2"><strong>Buzz</strong></div>`;

    // every other i that isn't a multiple of 3 or 5
    }else{
        document.getElementById("box").innerHTML +=`<div class="standard rounded-2"><strong>${i}</strong></div>`;
    }


}