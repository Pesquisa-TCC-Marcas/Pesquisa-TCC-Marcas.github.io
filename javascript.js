function sortearLink() {
    var numeroSorteado = Math.floor(Math.random() * 6) + 1;

    var links = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    };

    window.location.href = links[numeroSorteado];
}
setTimeout(sortearLink, 1000);
