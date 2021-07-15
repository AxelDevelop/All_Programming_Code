<!-- Abstract classes can be inherited but they cannot be instantiated. -->

<!-- They offer the advantage of being able to contain both methods with definitions and abstract methods that aren't defined until they are inherited. -->

<!-- A class inheriting from an abstract class must implement all the abstract methods. -->

<!-- The abstract keyword is used to create an abstract class or an abstract method. -->

<!-- For example: -->

<?php

    abstract class Fruit {
        private $color;

        abstract public function eat();

        public function setColor($c){
            $this -> color = $c;
        }
    }

    class Apple extends Fruit {
        public function eat(){
            echo "Omnomnom";
        }
    }

    $obj = new Apple();
    $obj -> eat();

?>

<!-- Abstract functions can only appear in an abstract class. -->