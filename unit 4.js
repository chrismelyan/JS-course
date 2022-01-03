var scores = [60, 50, 60, 58, 54, 54, 
    58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 
    44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 
    57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) { 
            output = "Bubble solution #" + i + " score: " + scores[i];
            console.log(output);
            if (scores[i] > highScore) {
                highScore = scores[i];
            }
        }
        console.log("Bubble tests: " + scores.length);
        console.log("Highest bubble score: " + highScore);
    
    function getBestResults(scores, highScore) {
        var bestSolutions = [];
        for (var j = 0; j < scores.length; j++) {
    if (scores[j] == highScore) {
        bestSolutions.push(j);
    }
        }
        return bestSolutions;
    }
    var bestSolutions = getBestResults (scores, highScore);
        console.log("Solution with the highest score: " + bestSolutions);
    
        var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
        var hasBubbleGum = [false, false, false, true];
    
        for (var i = 0; i < hasBubbleGum.length; i++) {
            if (hasBubbleGum[i]) {
                console.log(products[i] + " contains bubble gum");
            }
        }
    
    function getMostCostEffectiveSolution (score, costs, highScore) {
        var cost = 100;
        var index;
    
        for (var i = 0; i < scores.length; i++) {
            if (score[i] == highScore) {
                if (costs > costs[i]) {
                    index = i;
                    cost = costs[i];
                }
            }
        }
        return index;
    }