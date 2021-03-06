<!-- Similar to the class constructor, there is a destructor magic method __destruct(), which is automatically called when an object is destroyed. -->

<!-- For example -->

<?php

    class Person{
        Public function __destruct()
        {
            echo "Object Destroyed";
        }
    }

    $p = new Person();

?>
<!-- 
This script creates a new Person object. When the script ends the object is automatically destroyed, which calls the destructor and outputs the message "Object destroyed".

To explicitly trigger the destructor, you can destroy the object using the unset() function in a statement 
similar to: unset($p);

Destructors are useful for performing certain tasks when the object finishes its lifecycle. For example, release 

resources, write log files, close a database connection, and so on.

PHP releases all resources when a script finishes its execution. -->