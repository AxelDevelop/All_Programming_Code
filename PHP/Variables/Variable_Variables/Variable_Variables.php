<!-- With PHP, you can use one variable to specify another variable's name.
So, a variable variable treats the value of another variable as its name.

For example:
 -->

<?php

    $a = 'hello';
    $hello = "Hi!";
    echo $$a;


?>

<!-- $$a is a variable that is using the value of another variable, $a, as its name. The value of $a is equal to "hello". The resulting variable is $hello, which holds the value "Hi!". -->