<!-- The PHP static keyword defines static properties and static methods. -->

<!-- A static property/method of a class can be accessed without creating an object of that class. -->

<!-- A static property or method is accessed by using the scope resolution operator :: between the class name and the property/method name. -->

<?php 

    class MyClass {
        static $myStaticProperty = 42;
    }

    echo myClass :: $myStaticProperty;

?>

<!-- The self keyword is needed to access a static property from a static method in a class definition. -->

<!-- For example: -->

<?php 

    class myClass1 {
        static $myProperty = 42;
        static function myMethod(){
            echo self :: $myProperty;
        }
    }

    MyClass1 :: myMethod();

?>

<!-- Objects of a class cannot access static properties in the class but they can access static methods. -->