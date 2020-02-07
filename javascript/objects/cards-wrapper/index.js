let qtdMemoryCardActive = 0;

function createCardsWrapper() {
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .cards-wrapper{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }
        
        .cards-wrapper > div{
            margin-bottom: 10px;
        }`
        ;

    $head.insertBefore($style, null);

    $cardsWrapper.addEventListener("click", event => {
        qtdMemoryCardActive = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
        console.log('%c%s', 'color: #733d00', qtdMemoryCardActive);
        // if ($origin.closest(".memory-card.-active")) {
        //     qtdMemoryCardActive = qtdMemoryCardActive + 1;
        // } else if($origin.closest(".memory-card")) {
        //     qtdMemoryCardActive = qtdMemoryCardActive - 1;
        // }
    });

    return $cardsWrapper;
}


