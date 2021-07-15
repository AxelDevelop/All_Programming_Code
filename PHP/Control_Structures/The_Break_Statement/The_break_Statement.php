<!-- As discussed in the previous lesson, the break statement is used to break out of the switch when a case is matched. -->
<!-- If the break is absent, the code keeps running. -->

<!-- For example: -->

$x = 1;

switch () {
    case 1:
        echo "One";
    case 2:
        echo "Two";
    case 3:
        echo "Three"
    dafault:
        echo "No match";
}

<!-- Outputs "OneTwoThreeNo Match -->

<!-- Break can also be used to halt the execution of for, foreach, while, do-while structures. -->

<!-- The break statement ends the current for, foreach, while, do-while or switch and continues to run the program on the line coming up after the loop. -->

<!-- A break statement in the outer part of a program (e.g., not in a control loop) will stop the script. -->