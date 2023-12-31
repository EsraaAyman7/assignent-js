/*/////////////////question 1/////////////////////////*
var num = Number(window.prompt("Enter your number"));
 if(num != null){
    console.log(num);
 }
/*////////////////////////////////////////////////// */
/*/////////////question 2////////////////////////////*
var num =window.prompt("ENTER NUMBER");
if(num %3==0 && num %4==0){
    console.log("Yes");
}
else{
    console.log("No");
}
 /*///////////////////*/
/*/////////////question 3///////////////////////////*
 var num1 = Number(window.prompt("Enter your number 1"));
 var num2 = Number(window.prompt("Enter your number 2"));
 if(num1 > num2){
    console.log(num1)
 }else{
    console.log(num2)
 }
 /*/////////////////////////////////////////*
/*/////////////question 4//////////////////////////*
 var num = Number(window.prompt("Enter your number"));
 if(num < 0){
    console.log("Output negative")
 }else{
    console.log("Output positive")
 }
 /*////////////////////////////////////////////////////////*
/*/////////////question 5/////////////////////////*
 var num1 = parseInt(prompt("Enter the first integer: "));
 var num2 = parseInt(prompt("Enter the second integer: "));
 var num3 = parseInt(prompt("Enter the third integer: "));
var max, min;
 max = num1;
if (num2 > max){
  max = num2;
}
 if (num3 > max){
  max = num3;
}
 min = num1;
  if (num2 < min){
  min = num2;
}
 if(num3 < min){
  min = num3;
}
console.log("Max element = " + max);
console.log("Min element = " + min);
/*/////////////////////////////////////////*/
/*/////////////question 6////////////////////////*
 var num =Number(window.prompt("Enter your number"));
 if(num % 2 == 0){
    console.log("Output: even")
 }else{
    console.log("Output: odd")
 }
 /*///////////////////////////////////*
/*/////////////question 7///////////////////////*
var char = window.prompt( ('enter character :'))
if(char=='a' || char=='o' || char=='u' || char=='i' || char== 'e'){
    console.log("vowel")
}else if(char== 'A' || char== 'O' || char== 'U' || char=='I' || char== 'E'){
    console.log("vowel")
}else{
    console.log("Consonant")
}
 /*/////////////////////////////////////////////////*
/*/////////////question 8//////////////////////*
 var num = Number(window.prompt("Enter Your Number"));
  var result="";
for(var i=1 ; i <= num ; i++){
    result += i + " " ;
} 
console.log(result);
   /*/////////////////////////////////////////*/
/*////////////////questio 9///////////////////*
var num = Number(window.prompt("Enter number"))
var result = ''
for(var i=1 ; i<13; i++){
  result+= num * i + ' ';
}
console.log(result)
  /*/////////////////////////////////////////*/
/*////////////////questio 10/////////////////*
 var num = Number(window.prompt("Enter Number")) 
 var result = ''
 for(var i=2 ; i<num; i+=2){
  result+= i + ' ';
 }
console.log(result)
/*/////////////////////////////////////////
/*////////////////questio 11////////////////*
var num1 =  Number(prompt("Enter number 1"));
var num2 =  Number(prompt("Enter number 2:"));
var result =1;
for(var i =0; i<num2; i++){
    result *=num1;
}
console.log(result);
/*/////////////////////////////////////*/
/*////////////question 12/////////////*
 var mark1 = Number(window.prompt("Enter mark 1"))
 var mark2 = Number(window.prompt("Enter mark 2"))
 var mark3 = Number(window.prompt("Enter mark 3"))
 var mark4 = Number(window.prompt("Enter mark 4"))
 var mark5 = Number(window.prompt("Enter mark 5"))
 var totalMarks = mark1 + mark2 + mark3 + mark4 + mark5
 var Average = totalMarks / 5
 var Percentage = (totalMarks / (5 * 100) )* 100;
 console.log(totalMarks)
 console.log(Average)
 console.log(Percentage)
 /*/////////////////////////////////////////////////*/
 /*/////////////question 13////////////////*

  var month= Number(window.prompt("Enter Month"))
  if(month==2){
    console.log("Days in Month: 28")
  }else if(month==4 || month==6 || month==9 || month==11 ){
    console.log("Days in Month: 30")
  }else{
    console.log("Days in Month: 31")
  }
 /*/////////////////////////////////////////*
 /*///////////////question 14/////////////*
 var Physics = Number(window.prompt("Enter mark"))
 var Chemistry = Number(window.prompt("Enter mark"))
 var Biology = Number(window.prompt("Enter mark"))
 var Mathematics = Number(window.prompt("Enter mark"))
 var Computer = Number(window.prompt("Enter mark"))
 var totalMarks = Physics + Chemistry + Biology + Mathematics + Computer
 var percentage = (totalMarks / (5 * 100) )* 100;
 var Grad ;
 if(percentage >= 90){
      grade = 'A'
 }else if(percentage >= 80){
       grade = 'B'
 }else if(percentage >= 70){
       grade = 'C'
 }else if(percentage >= 60){
       grade ='D'
 }else if(percentage >= 50){
   grade = 'E'
 }else if(percentage >=40 ){
   grade ='F'
 }else{
    grade = 'F'
 }
 console.log("Percentage :" + percentage + "% " +"Grad "+grade) 
 /*/////////////////////////////////////////////*/
  ////////////////////////////////*Using switch case*///////////////////////////////////////
   /*/////////////question 15////////////////////////////*
  var month= Number(window.prompt("Enter month"))
switch(month){
    case 2:
    console.log("Days in Month: 28");
    break;
    case 4:
    console.log("Days in Month: 30");
    break;
    case 6:
    console.log("Days in Month: 30");
    break;
    case 9 :
    console.log("Days in Month: 30");
    break;
    case 11:
    console.log("Days in Month: 30");
    break;
    default:
        console.log("Days in Month: 31");
}
   /*/////////////////////////////////////////*
  /*/////////////question 16////////////////////////////*
   var char= window.prompt("Enter character");
   switch(char){
    case 'a':
        console.log("vowel")
        break;
    case 'o':
        console.log("vowel")
        break;
    case 'u':
            console.log("vowel")
            break;
    case 'e':
        console.log("vowel")
        break;
    case 'i':
        console.log("vowel")
        break;
    case 'A':
        console.log("vowel")
        break;
     case 'O':
        console.log("vowel")
        break;
    case 'U':
        console.log("vowel")
        break;
     case 'E':
        console.log("vowel")
        break;
    case 'I':
        console.log("vowel")
        break;
    default:
        console.log("consonant")
   }
 /*//////////////////////////////////////////////////*
 /*/////////////question 17////////////////////////////*

var num1= Number(window.prompt("Enter number 1"))
var num2= Number(window.prompt("Enter  number 2"))
switch(true){
    case num1 > num2 :
        console.log(num1)
        break;
      default:
        console.log(num2)
}
 /*//////////////////////////////////////////////*
 /*//////////////question 18////////////////////////////*
 var num= Number(window.prompt("Enter number "))
 switch(num % 2){
    case 0:
        console.log("even")
        break;
        default:
            console.log("odd")
 }
  /*/////////////////////////////////////////*
 /*//////////////question 19////////////////////////////*
  var num= Number(window.prompt("Enter number "))
  switch(true){
    case num < 0:
        console.log("negative")
        break;
        case num == 0:
        console.log("0")
        break;
        default:
            console.log("positiv")
  }
 /*//////////////////////////////////////////////*
 /*/////////////question 20////////////////////////////*



 var num1 = Number(window.prompt('Enter number 1'))
 var op = window.prompt( ('enter oparator :'))
 var num2 = Number (window.prompt('Enter number 2'))
 switch(op){
     case"+":
     console.log(num1+num2);
     break;
      case"-":
     console.log(num1-num2);
     break;
     case"*":
     console.log(num1*num2);
     break;
     case"/":
     console.log(num1/num2);
     break;
 }
  /*/////////////////////////////////////////*/
 /* function cubes (a){
var cube= a * a * a
   return cube
  }
 var result = cubes(3)
 console.log(result)*/
 function matchHouses(step) {
  if (step === 0) {
    console.log('No houses, no matchsticks!');
    return 0;
  }

  let matchsticks = 5 * step + 1;

  for (let i = 1; i <= step; i++) {
    console.log('   HHH');
    console.log('   HHH');
    console.log('   HHH');
    console.log('   HHHHH');
    console.log('  |||');
   
  }

  console.log('=========');
  console.log('Total matchsticks: ${matchsticks}');
  return matchsticks;
}

// Example
matchHouses(4);
 

