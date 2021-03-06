<!-- Classes can inherit the methods and properties of another class. The class that inherits the methods and properties is called a subclass. The class a subclass inherits from is called the parent class.

Inheritance is achieved using the extends keyword.

For example: -->

<?php

use Dog as GlobalDog;

class Animal {
        public $name;
        public function hi(){
            echo "Hi from Animal";
            
        }
    }
    class Dog extends Animal{

    }

    $d = new Dog();
    $d -> hi();

?>

<!-- Here the Dog class inherits from the Animal class. As you can see, all the properties and methods of Animal are accessible to Dog objects. -->

<!-- Parent constructors are not called implicitly if the subclass defines a constructor. However, if the child does not define a constructor then it will be inherited from the parent class if it is not declared private. -->

<!-- Notice all our properties and methods have public visibility. -->

<!-- For added control over objects, declare methods and properties using a visibility keyword. This controls how and  -->
<!-- from where properties and methods can be accessed. -->

<!-- Check out the next lesson for more on visibility. -->