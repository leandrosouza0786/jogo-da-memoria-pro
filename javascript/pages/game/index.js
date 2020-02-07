const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const createCardMemory = memoryCard();

const $MemoryCardBackCharp = createCardMemory({
    src: "assets/icon-c.png",
    alt: "Icone de um livro de C#"
});

const $MemoryCardBackJs = createCardMemory({
    src: "assets/-icon-js.jpg",
    alt: "Icone de um livro de C#"
});


const $MemoryCardBackJava = createCardMemory({
    src: "assets/icon-java.jpg",
    alt: "Icone de um livro de C#"
});

const $MemoryCardBackWoman = createCardMemory({
    src: "assets/icon-woman.jpg",
    alt: "Icone de um livro de C#"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJava);

$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackCharp);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackCharp);


$root.insertAdjacentElement("beforeend", $cardsWrapper);
