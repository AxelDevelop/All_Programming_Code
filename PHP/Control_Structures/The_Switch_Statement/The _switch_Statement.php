<!-- The switch statement is an alternative to the if-elseif-else statement.
Use the switch statement to select one of a number of blocks of code to be executed. -->

<!-- Syntax: -->

switch (n) {
  case value1:
    //code to be executed if n=value1
    break;
  case value2:
     //code to be executed if n=value2
     break;
  ...
  default:
    // code to be executed if n is different from all labels
}

<!-- First, our single expression, n (most often a variable), is evaluated once. Next, the value of the expression is compared with the value of each case in the structure. If there is a match, the block of code associated with that case is executed. -->

<!-- Using nested if else statements results in similar behavior, but switch offers a more elegant and optimal solution. -->

<!-- Consider the following example, which displays the appropriate message for each day. -->

<?php
$today = 'Tue';

switch ($today){
    case "Mon":
        echo "Today is Monday";
        break;
    case "Tue":
        echo "Today is Tuesday";
        break;
    case "Wed":
        echo "Today is Wednesday";
        break;
    case "Thu":
        echo "Today Thursday";
        break;
    case "Fri":
        echo "Today is Friday";
        break;
    case "Sat":
        echo "Today is Saturday";
        break;
    case "Sun":
        echo "Today is Sunday";
        break;
    default:
    echo "Invalid Day.";
}

// Outputs "Today is Tuesday"

?>

<!-- The break keyword that follows each case is used to keep the code from automatically running into the next case. If you forget the break; statement, PHP will automatically continue through the next case statements, even when the case doesn't match. -->

<!-- Failing to specify the break statement causes PHP to continue executing the statements that follow the case, until it finds a break. You can use this behavior if you need to arrive at the same output for more than one case. -->

<?php

$day = 'wed';

switch ($day){
    case 'mon':
        echo 'First day of the week';
        break;
    case 'Tue':
    case 'Wed':
    case 'Thi':
        echo "Working day";
    break;

    case 'Fri':
        echo 'Friday!';
        break;
    default:
        echo 'Weekend!';
}

// <!-- Outputs "Working day" -->

?>