const memoryCard = () => {
    // const { nameClass, src, alt } = Card;

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .memory-card {
            position: relative;
            width: 155px;
            height: 155px;
        }
        .memory-card .card{
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            position: absolute;
            cursor: pointer;
        }

        .memory-card .card > .icon{
            width: 100px;
            height: 100px;
        }

        .memory-card.-active .card{
            display: none;
        }

        .memory-card.-active .card.-front{
            display: flex;
        }

        .memory-card .card.-front{
            background-color: #fff;
        }

        .memory-card .card.-front::before{
            content: '';
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }

        .memory-card .card.-front > .icon{
            position: absolute;
            transform: translateY(-12px);
        }
    `;

    $head.insertBefore($style, null);

    return ({ nameClass, src, alt }) => `
    <div class="memory-card" onClick="handleClick(this)">
        <article class="card -front">
        <img class="icon" src="${src}" alt="${alt}">
        </article>

        <article class="card">
        <img class="icon" src="assets/icon-collabcode.png" alt="Mascote da collabecode o Gueio">
        </article>
    </div>
    `
        ;
};

const handleClick = $component => {
    if (!$component.classList.contains("-active")) {
        console.log("entrou aqui")
        if (qtdMemoryCardActive < 2) {
            $component.classList.toggle("-active");
        }

        if (qtdMemoryCardActive == 1) {
            setTimeout(() => {
                const $memoryCardActive = document.querySelectorAll(".memory-card.-active");
                $memoryCardActive.forEach($memoryCard => {
                    $memoryCard.classList.remove("-active");
                });
                qtdMemoryCardActive = 0;
            }, 2000);
        }
    }

    console.log("dentro do method", qtdMemoryCardActive)
}
