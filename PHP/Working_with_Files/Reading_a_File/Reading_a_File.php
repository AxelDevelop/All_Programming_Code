<!-- The file() function reads the entire file into an array. Each element within the array corresponds to a line in the file: -->

<?php

    $read = file('Name.txt');
    foreach($read as $line){
        echo $line .", ";
    }

?>

<!-- The file() function reads the entire file into an array. Each element within the array corresponds to a line in the file: -->

<!-- This prints all of the lines in the file, and separates them with commas. -->

<!-- We used the foreach loop, because the $read variable is an array. -->

<!-- At the end of the output in the previous example, we would have a comma, as we print it after each element of the array. -->
<!-- The following code lets us avoid printing that final comma. -->

<?php

    $read = file('Names.txt');
    $count = count($read);

    $i = 1;

    foreach($read as $line){
        echo $line;
        if($i < $count){
            echo ', ';
        }
        $i++;
    }
?>

<!-- The $count variable uses the count function to obtain the number of elements in the $read array. -->

<!-- Then, in the foreach loop, after each line prints, we determine whether the current line is less than the total number of lines, and print a comma if it is. -->

<!-- This avoids printing that final comma, as for the last line, $i is equal to $count. -->