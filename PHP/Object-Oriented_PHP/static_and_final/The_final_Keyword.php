<!-- The PHP final keyword defines methods that cannot be overridden in child classes. Classes that are defined final cannot be inherited. -->

<!-- This example demonstrates that a final method cannot be overridden in a child class: -->

<?php

    class myClass {
        final function myFunction(){
            echo "Parent";
        }
    }

    // Error because a final method cannot be overriden in child class

    class myClass2 extends myClass {
        // function myFunction(){
        //     echo "Child";
        // }
    }

    // The following code demonstrates that a final class cannot be inherited:

    final class myFinalClass{

    }

    // Error because a final class cannot be inherited.

    // class myClass3 extends myFinalClass{
    // }

?>

<!-- Unlike classes and methods, properties cannot be marked final. -->