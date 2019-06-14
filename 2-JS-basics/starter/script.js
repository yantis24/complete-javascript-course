/*
const firstname = 'Toby';
console.log(firstname);

const lastname = "cutey";
console.log(lastname);
*/

// let year, YearJohn, YearMark;
// now = 2019;
// JohnAge = 23;
// MarkAge = 35;

// //Math Operator//

// YearJohn = now - JohnAge;
// YearMark = now - MarkAge;

// console.log(YearMark);
// console.log(YearJohn);
// console.log(now + 10);

// //Logical Operator//
// const ageOlder = JohnAge > MarkAge;
// console.log (ageOlder);

// //Type of Operators//
// console.log(typeof ageOlder);
// console.log(typeof now);
// console.log(typeof "who is older?");

// //Operator Precendeces//

// //multiple operators/

// const x,y;
// x = y = ( 3 + 5 )

/*** CODING CHALLENGE 1 ***********/

/* Mark and John aree trying to compare ther BMI, which is calculated using
the formula : BMI = mass /height^2 = mass / (height * height)
(mass in kg and height in meter).
*/

//1 store Mark's and John's mass and height in variables
const MarkHeight = 1.77;
const JohnHeight = 1.85;
const MarkWeight = 65;
const JohnWeight = 77;

//2. calculate both their BMIs
 const MarkBMI = MarkWeight / (MarkHeight * 2);
 const JohnBMI = JohnWeight / (JohnHeight * 2);
 console.log(MarkBMI, JohnBMI);

//3. Create a boolean variable containing information about whether
// Mark has a higher BMI than JOhn

const idealBMI = MarkBMI < JohnBMI ;

//4. Print a string to the console containing the variable from step 3.
//(somethingg like "Is Mark's BMI higher than John's true")
console.log ( "is Mark's BMI higher than John's" + " "+ (idealBMI));

/**** if/else statements *******/
  if (MarkBMI > JohnBMI) {
      console.log ('Mark\s BMI is Higher than John.');
    }
    else {
      console.log ('John\s BMI is Higher than Mark.');
    }
/************************/
/***** Boolean Logic*********/

const firstname = 'Jane';
const age = 23;

  if (  age <= 13 ) {
    console.log(firstname + ' still a girl!');
    }
    else if ( age > 13 && age <= 18) {
    console.log (firstname + ' is a teenager');
    }
    else if ( age > 18 && age <= 30 ) {
    console.log (firstname + ' is a young adult');
    }
    else {
    console.log ( firstname + ' is a Lady!');
    }

/********************************/
/********* Ternary Opeerator *********/

const drink = age >= 18 ? 'Booze' : 'non-alcoholic';
    console.log (drink);

/******* Switch Operations********/

const Job = 'Doctor';
switch (Job) {
      case 'Doctor':
            console.log(firstname + ' works in hospital');
            break;
      case 'Teacher':
            console.log(firstname + ' works at school');
            break;
      case 'Driver':
            console.log(firstname + ' works for Uber');
            break;
      case 'Web developer':
            console.log(firstname + ' works at Googgle');
            break;
      default:
            console.log(firstname + ' works somewhere');
}

/*****************************************/
























