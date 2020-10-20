// // FIZZBUZZ

// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".



for (var numbers = 1; numbers < 101; numbers++) {

    if (numbers % 3 === 0) {
        console.log('Fizz');
    }

    else if (numbers % 5 === 0) {
        console.log('Buzz');
    } 

    // else if (numbers % 3 === 0 && numbers % 5 === 0) {
    //     console.log('FizzBuzz')
    // }

    else{
        console.log(numbers);
    } 
}




