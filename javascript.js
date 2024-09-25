function sortearLink() {
    var numeroSorteado = Math.floor(Math.random() * 6) + 1;

    var links = {
        1: "https://forms.gle/8F5UeALjZUwQ8mvw9",
        2: "https://forms.gle/sdiXHg94XghuMCP18",
        3: "https://forms.gle/gXJf7gnQZLGEmEkNA",
        4: "https://forms.gle/TztUXrYmQ8q1VtfbA",
        5: "https://forms.gle/HU16G3mDy7X9TYV16",
        6: "https://forms.gle/BGUsdVJpEbhmmfSe8"
    };

    window.location.href = links[numeroSorteado];
}
setTimeout(sortearLink, 1000);
