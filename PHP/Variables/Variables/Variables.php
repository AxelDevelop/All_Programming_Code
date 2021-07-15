<!-- Variables are used as "containers" in which we store information.

A PHP variable starts with a dollar sign ($), which is followed by the name of the variable.

$variable_name = value;

Rules for PHP variables:
- A variable name must start with a letter or an underscore
- A variable name cannot start with a number
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive ($name and $NAME would be two different variables)

For example: -->

<?php

    $name = 'jhon';
    $age = 25;
    echo $name;
    
    // outputs 'Jhon'
?>

<!-- In the example above, notice that we did not have to tell PHP which data type the variable is. -->

<!-- PHP automatically converts the variable to the correct data type, depending on its value. -->

<!-- Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it. -->