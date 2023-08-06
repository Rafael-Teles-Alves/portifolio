window.addEventListener("load", () => {
    // Simular um atraso de 2 segundos (2000 milissegundos)
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        preloader.style.opacity = "0"; // Desvanecer a opacidade
        setTimeout(() => {
            preloader.style.display = "none"; // Ocultar a tela de carregamento após o desvanecimento
        }, 500); // Aguardar 500 milissegundos para garantir que a animação de desvanecimento seja concluída
    }, 2000); // Aguardar 2 segundos antes de ocultar a tela de carregamento
});
