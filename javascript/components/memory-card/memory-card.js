
function createCardMemory() {
    const $memoryCard = document.createElement('article');
    const $icon = "<img class='icon' src='assets/icon-collabcode.png' alt='Gueio'>";

    $memoryCard.classList.add('memory-card');

    $memoryCard.insertAdjacentHTML("afterBegin", $icon);
    $wrapCard.insertBefore($memoryCard, null);

}


function createCardMemoryFront() {
    const $memoryCardFront = document.createElement('article');
    const $iconCsharpe = "<img class='icon' src='assets/icon-c.png' alt='Gueio'>";

    $memoryCardFront.classList.add('memory-card');
    $memoryCardFront.classList.add('-front');

    $wrapCard.insertBefore($memoryCardFront, null);

    $memoryCardFront.insertAdjacentHTML("afterBegin", $iconCsharpe);
}