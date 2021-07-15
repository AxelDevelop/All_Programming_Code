<!-- Information can be passed to functions through arguments, which are like variables.
Arguments are specified after the function name, and within the parentheses.
Here, our function takes a number, multiplies it by two, and prints the result: -->

<?php

    function multiplyByTwo($Number){
        $Answer = $Number * 2;
        echo $Answer;
    }

    multiplyByTwo(3);
    // Outputs 6


?>

<!-- You can add as many arguments as you want, as long as they are separated with commas -->

<?php

    function multiplyByTwo2($Number){
        $Answer = $Number * 2;
        echo $Answer;
    }

    multiplyByTwo2(3,6);
    // Outputs 6


?>

<!-- When you define a function, the variables that represent the values that will be passed to it for processing are called parameters. However, when you use a function, the value you pass to it is called an argument. -->