//selecionar btn
const topButton = document.getElementById("topbutton");

// mostrar o btn
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

};

// função para rolar
topButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
