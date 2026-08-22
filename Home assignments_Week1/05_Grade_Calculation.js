function findStudentgrade(score) //Function with parameter
{ 
    switch (true) { 
 
        case score >= 90 && score <= 100: 
            return "A Grade"; 
 
        case score >= 80 && score < 90: 
            return "B Grade"; 
 
        case score >= 70 && score < 80: 
            return "C Grade"; 
 
        default: 
            return "D Grade"; 
    } 
} 

let score = 75; //Declare + initialize variable

console.log(findStudentgrade(score));