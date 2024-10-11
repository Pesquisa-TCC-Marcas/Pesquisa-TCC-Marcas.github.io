function sortearLink() {
    var numeroSorteado = Math.floor(Math.random() * 4) + 1;

    var links = {
        1: "https://forms.gle/sdiXHg94XghuMCP18",
        2: "https://forms.gle/TztUXrYmQ8q1VtfbA",
        3: "https://forms.gle/HU16G3mDy7X9TYV16",
        4: "https://forms.gle/BGUsdVJpEbhmmfSe8"
    };

    window.location.href = links[numeroSorteado];
}
setTimeout(sortearLink, 500);
