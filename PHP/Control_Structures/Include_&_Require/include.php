<!-- The include and require statements allow for the insertion of the content of one PHP file into another PHP file, before the server executes it. -->
<!-- Including files saves quite a bit of work. You can create a standard header, footer, or menu file for all of your web pages. Then, when the header is requiring updating, you can update the header include file only. -->

<!-- Assume that we have a standard header file called header.php. -->

<?php
  echo '<h1>Welcome</h1>';
?>

<!-- Use the include statement to include the header file in a page. -->

<html>
  <body>

  <?php include 'header.php'; ?>

  <p>Some text.</p>
  <p>Some text.</p>
  </body>
</html>

<!-- The include and require statements allow for the insertion of the content of one PHP file into another PHP file, before the server executes it. -->

<!-- Using this approach, we have the ability to include the same header.php file into multiple pages. -->

<html>
  <body>

  <?php include 'header.php'; ?>

  <p>This is a paragraph</p>
  </body>
</html>


<!-- Result: -->

<!-- the results is in an image called "include" -->

<!-- Files are included based on the file path. -->
<!-- You can use an absolute or a relative path to specify which file should be included. -->