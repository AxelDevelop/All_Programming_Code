<!-- Variables can store a variety of data types. -->
<!-- Data types supported by PHP: String, Integer, Float, Boolean, Array, Object, NULL, Resource. -->

<!-- PHP String

A string is a sequence of characters, like "Hello world!"
A string can be any text within a set of single or double quotes. -->

<?php
  $string1 = "Hello world!"; //double quotes
  $string2 = 'Hello world!';  //single quotes

    // concatenation
  echo $string1.$string2
?>

<!-- You can join two strings together using the dot ( .) concatenation operator. -->
<!-- For example: echo $s1 . $s2 -->

<!-- PHP Integer

An integer is a whole number (without decimals) that must fit the following criteria:
- It cannot contain commas or blanks
- It must not have a decimal point
- It can be either positive or negative -->

<?php
  $int1 = 42; // positive number
  $int2 = -42; // negative number
?>


<!-- Variables can store a variety of data types. -->

<!-- A float, or floating point number, is a number that includes a decimal point. -->

<?php
  $x = 42.168;
?>

<!-- PHP Boolean -->

<!-- A Boolean represents two possible states: TRUE or FALSE. -->

<?php
  $x = true; $y = false;
?>

<!-- Booleans are often used in conditional testing, which will be covered later on in the course. -->