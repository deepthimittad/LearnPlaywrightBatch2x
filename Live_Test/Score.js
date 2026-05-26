let score = 49;
function classifyJsBasicsScore(score) {
    if (score >= 90) {
        console.log("EXCELLENT");
    }
    else if (score >= 75 && score <= 89) {
        console.log("Good");
    }
    else if (score >= 50 && score <= 74) {
        console.log("NEEDS_PRACTICE");
    }
    else {
        console.log("Revisit");
    }

}
classifyJsBasicsScore(score);