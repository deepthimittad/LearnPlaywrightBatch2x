// 1. Defining the function
/*
function greet()
{
    console.log("A method which can call itself repeatedly");
}

// 2. Calling the function

greet();
greet();
greet();*/


let score = 88;
function classifyJsBasicsScore(score) {
  if (score >= 90)
  {
    return("EXCELLENT");
  }
  else if (score >= 75 && score <=89)
  {
    return ("Good");
 }
  else if (score >= 50 && score <= 74)
  {
    return ("NEEDS_PRACTICE");
}
  else if (score < 50)
  {
    return ("Revisit");
  }

}