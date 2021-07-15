<!-- PHP variables can be declared anywhere in the script.
The scope of a variable is the part of the script in which the variable can be referenced or used.

PHP's most used variable scopes are local, global.
A variable declared outside a function has a global scope.
A variable declared within a function has a local scope, and can only be accessed within that function.

Consider the following example. -->

<?php

    $name = 'David';
    function getname(){
        // echo $name;
    }

    getname();

    // Error: Undefined varible: name
?>

<!-- This script will produce an error, as the $name variable has a global scope, and is not accessible within the getName() function. Tap continue to see how functions can access global variables. -->

<!-- Functions will be discussed in the coming lessons. -->

