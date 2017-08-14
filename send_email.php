<?php
$admin_email = "gordeev.dmitriy@physics.msu.ru";

if(isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["message"])) {

    $_POST["message"] = $_POST["message"]."\nemail отправителя: ".$_POST["email"];

    mail($admin_email, "Заявка с сайта Алтай", wordwrap($_POST["message"],70));
    header("Location: index.html");
}