<?php

session_start();


//save cms

if (isset($_POST['save'])) {
    $title = mysqli_real_escape_string($db, $_POST['title']);
    $evenement = mysqli_real_escape_string($db, $_POST['evenement']);

    $sql = "INSERT INTO cms (title, evenement)
                VALUES ('$title', '$evenement')";
    mysqli_query($conn, $sql);
};
