let name=prompt('What is your name?'); //taking the name of user
let  age=prompt('Tell us your age');//taking the user age "12"
let email=prompt('Enter your email');//taking the user email
if (age < 12) { // checking if the user is less than 12
    alert(`Hi ${name}, you are ${age} years old and you are too young to register.sorry😔😔 `);
} else if(age > 12 && age < 18) { // checking if the user is between ages of 12 and 18
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for.We will keep in touch via ${email}👋👋`)
}
else if(age == 18 || age > 18){ // checking if user is 18 or above
    alert(`Hi ${name}, you are ${age} years old and you have unlimited options to register.You are eligible to discounted offers and we will keep in touch via ${email}👋👋`)
} else {
    alert(`you must be ${age}`);
}