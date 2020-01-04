const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const createCardMemory = memoryCard();
console.log("teste retorno function", createCardMemory)
const $GueioBack = createCardMemory({
    nameClass: '',
    src: "assets/icon-collabcode.png",
    alt: "Icone de um livro de C#"
});

const $MemoryCardBackCharp = createCardMemory({
    nameClass: '-front',
    src: "assets/icon-c.png",
    alt: "Icone de um livro de C#"
});

const $MemoryCardBackJs = createCardMemory({
    nameClass: '-front',
    src: "assets/-icon-js.jpg",
    alt: "Icone de um livro de C#"
});


const $MemoryCardBackJava = createCardMemory({
    nameClass: '-front',
    src: "assets/icon-java.jpg",
    alt: "Icone de um livro de C#"
});

const $MemoryCardBackWoman = createCardMemory({
    nameClass: '-front',
    src: "assets/icon-woman.jpg",
    alt: "Icone de um livro de C#"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $GueioBack);

$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackJava);

$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackCharp);
$cardsWrapper.insertAdjacentHTML("beforeend", $MemoryCardBackCharp);


$root.insertAdjacentElement("beforeend", $cardsWrapper);
