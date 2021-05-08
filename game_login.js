function addUser() {
    name1 = document.getElementById("player1_name").value;
    name2 = document.getElementById("player2_name").value;

    console.log(name1);
    console.log(name2);

    localStorage.setItem("name 1", name1);
    localStorage.setItem("name 2", name2);

    window.location = "game_page.html";
}