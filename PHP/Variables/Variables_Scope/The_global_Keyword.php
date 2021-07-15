<!-- The global keyword is used to access a global variable from within a function. -->

<!-- To do this, use the global keyword within the function, prior to the variables. -->

<?php
    $name = 'David';
    function getname(){
        global $name;
        echo $name;
    }
    Getname();

    //Outputs 'David'
?>

<!-- Run the code and see how it works! -->
