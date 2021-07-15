Another page can be created that can access the session variables we set in the previous page:

<?php
// Start the session
session_start();
?>

<!DOCTYPE html>
<html>
<body>
<?php
echo "Your name is " . $_SESSION['name'];
// Outputs "Your name is John"
?>
</body>
</html>

<!-- Your session variables remain available in the $_SESSION superglobal until you close your session. -->

<!-- All global session variables can be removed manually by using session_unset(). You can also destroy the session with session_destroy(). -->