function sortearLink() {
    var numeroSorteado = Math.floor(Math.random() * 6) + 1;

    var links = {
        1: "https://www.youtube.com/watch?v=4vajEpd87PU&pp=ygUJYm9yYSBiaWxs",
        2: "https://www.youtube.com/watch?v=_KaA8W_Hov8&pp=ygUGbGEgZWxl",
        3: "https://www.youtube.com/watch?v=uSB58FixgSQ&pp=ygUNY2FzY2EgZGUgYmFsYQ%3D%3D",
        4: "https://www.youtube.com/watch?v=6EsmhsYvSUU&pp=ygUeYW1vc3RyYWRpbmhvIGV1IGdvc3RvIMOpIGFzc2lt",
        5: "https://www.youtube.com/watch?v=2P_esm8cNgU&pp=ygULY2FuZXRhIGF6dWw%3D",
        6: "https://www.youtube.com/watch?v=uA1zvB758gM&pp=ygUXZGlhbWFudGUgcGFwYWkgcXVlIGlzc28%3D"
    };

    // Redireciona para o link sorteado
    window.location.href = links[numeroSorteado];
}

// Aguarda 2 segundos antes de executar o sorteio e redirecionamento
setTimeout(sortearLink, 1000);