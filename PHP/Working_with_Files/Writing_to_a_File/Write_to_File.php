<!-- When writing to a file, use the fwrite() function. -->

<!-- The first parameter of fwrite() is the file to write to; the second parameter is the string to be written. -->

<!-- The example below writes a couple of names into a new file called "names.txt". -->

<?php
$myfile = fopen("names.txt", "w");

$txt = "John\n";
fwrite($myfile, $txt);
$txt = "David\n";
fwrite($myfile, $txt);

fclose($myfile);

/* File contains:
John
David
*/
?>

Notice that we wrote to the file "names.txt" twice, and then we used the fclose() function to close the file.
<!-- The \n symbol is used when writing new lines. -->