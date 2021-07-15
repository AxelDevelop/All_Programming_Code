<!-- Default arguments can be defined for the function arguments.
In the example below, we're calling the function setCounter(). There are no arguments, so it will take on the default values that have been defined. -->

<?php

    function setCounter($Num = 10){
        echo "Counter is ".$Num;
    }

    setCounter(42); // Counter is 42
    setCounter();   // Counter is 10


?>

<!-- When using default arguments, any defaults should be on the right side of any non-default arguments; otherwise, things will not work as expected. -->