<!-- A function is a block of statements that can be used repeatedly in a program.
A function will not execute immediately when a page loads. It will be executed by a call to the function.
A user defined function declaration starts with the word function: -->

function functionName() {
   //code to be executed
}

<!-- A function name can start with a letter or an underscore, but not with a number or a special symbol. -->
<!-- Function names are NOT case-sensitive. -->

In the example below, we create the function sayHello(). The opening curly brace ({) indicates that this is the beginning of the function code, while the closing curly brace (}) indicates that this is the end.
<!-- To call the function, just write its name: -->

<?php

    function sayHello(){
        echo "hello!";
    }

    sayHello();
    // Run the code and see how it works!

?>