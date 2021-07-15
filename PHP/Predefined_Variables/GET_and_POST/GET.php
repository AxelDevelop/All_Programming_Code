<!-- Information sent via a form using the GET method is visible to everyone (all variable names and values are displayed in the URL). GET also sets limits on the amount of information that can be sent - about 2000 characters.

However, because the variables are displayed in the URL, it is possible to bookmark the page, which can be useful in some situations.

For example: -->

<form action="actionGet.php" method="get">
  Name: <input type="text" name="name" /><br /><br />
  Age: <input type="text" name="age" /><br /><br />
  <input type="submit" name="submit" value="Submit" />
</form>


<?php
echo "Hi ".$_GET['name'].". ";
echo "You are ".$_GET['age']." years old.";
?>

<!-- Now, the form is submitted to the actionGet.php, and you can see the submitted data in the URL: -->

<!-- the results are in an image called "GET" -->

<!-- GET should NEVER be used for sending passwords or other sensitive information! -->

<!-- When using POST or GET, proper validation of form data through filtering and processing is vitally important to protect your form from hackers and exploits! -->