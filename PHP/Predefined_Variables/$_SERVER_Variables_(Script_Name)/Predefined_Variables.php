<!-- A superglobal is a predefined variable that is always accessible, regardless of scope. You can access the PHP superglobals through any function, class, or file. -->

<!-- PHP's superglobal variables are $_SERVER, $GLOBALS, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION. -->

<!-- $_SERVER -->

<!-- $_SERVER is an array that includes information such as headers, paths, and script locations. The entries in this array are created by the web server. -->

<!-- $_SERVER['SCRIPT_NAME'] returns the path of the current script: -->

<?php

    echo $_SERVER['SCRIPT_NAME'];
    // Outputs "/somefile.php"

?>

<!-- Our example was written in a file called somefile.php, which is located in the root of the web server. -->