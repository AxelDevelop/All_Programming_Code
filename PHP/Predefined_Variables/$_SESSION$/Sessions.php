<!-- Using a session, you can store information in variables, to be used across multiple pages. -->

<!-- Information is not stored on the user's computer, as it is with cookies. -->

<!-- By default, session variables last until the user closes the browser. -->

<!-- Start a PHP Session -->

<!-- A session is started using the session_start() function. -->

<!-- Use the PHP global $_SESSION to set session variables. -->

<?php
// Start the session
session_start();

$_SESSION['color'] = "red";
$_SESSION['name'] = "John";
?>

<!-- Now, the color and name session variables are accessible on multiple pages, throughout the entire session. -->

<!-- The session_start() function must be the very first thing in your document. Before any HTML tags. -->