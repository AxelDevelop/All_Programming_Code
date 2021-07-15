<!-- In PHP, a class can include member variables called properties for defining the features of an object, and functions, called methods, for defining the behavior of an object. A class definition begins with the keyword class, followed by a class name. Curly braces enclose the definitions of the properties and methods belonging to the class. -->

<!-- For example: -->

<?php
    class Person {
        public $age; //property
        
        public function speak() { //method
            echo "Hi!";
        }
    }

?>

<!-- The code above defines a Person class that includes an age property and a speak() method.

A valid class name starts with a letter or underscore, followed by any number of letters, numbers, or underscores.

Notice the keyword public in front of the speak method; it is a visibility specifier.

The public keyword specifies that the member can be accessed from anywhere in the code.

There are other visibility keywords and we will learn about them in later lessons.

Check out the next lesson to see how to instantiate objects! -->

<!-- The process of creating an object of a class is called instantiation. -->

<!-- To instantiate an object of a class, use the keyword new, as in the example below: -->

$bob = new Person();

<!-- In the code above, $bob is an object of the Person class. -->

<!-- To access the properties and methods of an object, use the arrow (->) construct, as in: -->

echo $bob->age;

<!-- This statement outputs the value of the age property for $bob. If you want to assign a value to a property use the assignment operator = as you would with any variable.

Let's define the Person1 class, instantiate an object, make an assignment, and call the speak() method: -->

<?php

    class Person1 {
        public $age; //property
        function speak() { //method
            echo "Hi!";
        }
    }

    // $p1 = new Person1(); //Instantiate an object
    $p1 -> age = 23; // assignament
    echo $p1 -> age; //23;
    $p1 -> speak(); //hi;

?>

<!-- Run the code and see how it works! -->