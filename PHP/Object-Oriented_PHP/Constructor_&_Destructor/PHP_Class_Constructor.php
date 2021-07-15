<!-- PHP provides the constructor magic method __construct(), which is called automatically whenever a new object is instantiated. -->

<!-- For example: -->

<?php

use Person as GlobalPerson;
use Person1 as GlobalPerson1;

class Person{
        public function __construct(){
            echo "Object created";
        }
    }

    $p = new Person();
?>

<!-- The __construct() method is often used for any initialization that the object may need before it is used.  -->

<!-- Parameters can be included in __construct() to accept values when the object is created. -->

<!-- For example: -->

<?php 

    class Person1 {
        public $name;
        public $age;
        public function __construct($name, $age) {
            $this -> name = $name;
            $this -> age = $age;  
        }
    }

    $p = new Person1("David", 42);
?>

<!-- In the code above, the constructor uses arguments in the new statement to initialize corresponding class properties. -->

<!-- You can't write multiple __construct() methods with different numbers of parameters. Different constructor behavior must be handled with logic within a single __construct() method. -->