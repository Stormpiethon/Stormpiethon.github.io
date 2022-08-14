/* what we need for factorial determination
    1. Number input
    2. Start sequence
    3. Input check (would be nice)
    4. create the factorial
    5. display the factorial
*/

function factDet() {
    console.log("factDet() started");
    //create needed variables
    var factInt;
    var factorialValue = 1;



    //act on the variables
    factInt = document.getElementById("factInput").value;
    console.log("factInt = " + factInt);
    if(factInt == 0){
        factorialValue = 1;
    } else if (factInt < 0){
        factorialValue = "Error";
    } else {
        for (var i = 1; i <= factInt; i++){
            factorialValue = i * factorialValue
        } 
    }
    console.log(factorialValue)
    document.getElementById("answer").innerHTML = factorialValue;
}