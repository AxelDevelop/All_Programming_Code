<!-- An interface specifies a list of methods that a class must implement. However, the interface itself does not contain any method implementations. This is an important aspect of interfaces because it allows a method to be handled differently in each class that uses the interface. -->
<!--
The interface keyword defines an interface.
The implements keyword is used in a class to implement an interface. -->

<!-- For example, AnimalInterface is defined with a declaration for the makeSound() function, but it isn't implemented until it is used in a class: -->

<?php

    interface AnimalInterface{
        public function makeSound();
    }

    class Dog implements AnimalInterface{
        public function makeSound()
        {
            echo "Woof! <br />";
        }
    }

    class Cat implements AnimalInterface{
        public function makeSound()
        {
            echo "Meow <br />";
        }
    }

    $myObj1 = new Dog();
    $myObj1 -> makeSound();

    $myObj2 = new Cat();
    $myObj2 -> makeSound();


?>

<!-- A class can implement multiple interfaces. More than one interfaces can be specified by separating them with commas. For example: -->

<?php

    // class Demo implements AInterface, BInterface, CInterface {
    // // Functions declared in interfaces must be defined here
    // }

?>

<!-- An interface can be inherit another interface by using the extends keyword. -->
<!-- All the methods specified in an interface require public visibility. -->