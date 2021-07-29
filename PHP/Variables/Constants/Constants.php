<!-- Constants are similar to variables except that they cannot be changed or undefined after they've been defined.
Begin the name of your constant with a letter or an underscore.

To create a constant, use the define() function:
define(name, value, case-insensitive)

Parameters:
name: Specifies the name of the constant;
value: Specifies the value of the constant;
case-insensitive: Specifies whether the constant name should be case-insensitive. Default is false;

The example below creates a constant with a case-sensitive name: -->

<?php

    define("MSG", "hi Sololearners!");
    echo MSG;

    // outputs "Hi Sololearners"
?>

<!-- The example below creates a constant with a case-insensitive name: -->

<?php

    define("MSGS", "hi Sololearners!", true);
    echo MSG;

    // outputs "Hi Sololearners"

?>

<!-- No dollar sign ($) is necessary before the constant name. -->