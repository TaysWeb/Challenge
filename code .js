const marks = [39 , 42, 65, 71, 84] ;


function calculateGrade() {
    let grade = 'A' ;

    let average1 = calculateAverage() ;
   
    // using the if statement by displaying the symbols 

    if ( average1 > 90 && average1 < 100 ) {        //value
         grade = 'A' ;
    } 
  if ( average1 > 80 &&  average1 < 89) {              //value
         grade ='B'   ; 
    }
  if (average1 > 69 &&  average1 < 80 ) {              //value
        grade ='C'   ; 
   }
  if (average1 > 60 &&  average1 < 69 ) {              //value
    grade ='D'   ; 
    }
  if ( average1 > 1 &&  average1 < 59 ) {              //value
    grade ='F'   ; 
   }
   console.log(average1);
   console.log(grade);
}


function calculateAverage() {


let average = 0;
let total =0;
let i =0;

while (i < marks.length) {
    total = total + marks[i] ;
    i++ ;
}
average = total / 6;
return average;

}