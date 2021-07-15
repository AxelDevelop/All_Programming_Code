<?php
// A PHP script starts with <?php and ends with ?>:
// <?php
//   // PHP code goes here
// ?>
<!-- // PHP
// Here is an example of a simple PHP file. The PHP script uses a built in function called "echo" to output the text "Hello World!" to a web page. -->

<html>
    <head>
        <title>My first PHP page</title>
    </head>
    <body>
        <?php
            echo "Hello world!";
        ?>
    </body>
</html>

<!-- PHP statements end with semicolons (;). -->

<!-- Alternatively, we can include PHP in the HTML <script> tag. -->

<html>
  <head>
    <title>My First PHP Page</title>
  </head>
  <body>
  <script language="php">
    // echo "Hello World!";
  </script>
  </body>
</html>

<!-- However, the latest version of PHP removes support for <script language="php"> tags. As such, we recommend using <?php ?> exclusively. -->

<!-- You can also use the shorthand PHP tags, <? ?>, as long as they're supported by the server. -->

?
echo "hello World";
?>

<!-- However, <?php ?>, as the official standard, is the recommended way of defining PHP scripts. -->

?>