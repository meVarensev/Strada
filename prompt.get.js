let prompt = require('prompt');
prompt.start();

prompt.get(['firstNumber'], function (err, result) {
const firstNumber=result['firstNumber'];
    console.log(firstNumber);
    if (firstNumber>1){
        console.log(">1");
    }
    if (firstNumber<1){
        console.log("<1");
    }else{
        if (firstNumbe=0){
            console.log("=0");
        }
    }
  // some code
});
 