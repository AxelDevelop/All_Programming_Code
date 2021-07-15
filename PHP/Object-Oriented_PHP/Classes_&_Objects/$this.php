<!-- $this is a pseudo-variable that is a reference to the calling object. When working within a method, use $this in the same way you would use an object name outside the class. -->

<!-- for example: -->

<?php

    class Dog{
        public $legs = 4;
        public function display(){
            echo $this -> legs;
        }
    }

    $d1 = new Dog();
    $d1 -> display(); //4

    $d2 = new Dog();
    $d2 -> legs = 2;
    $d2 -> display(); //2


?>

<!-- We created two objects of the Dog class and called their display() methods. Because the display() method uses $this, the legs value referred to the appropriate calling object’s property value. -->

<!-- As you can see, each object can have its own values for the properties of the class. -->