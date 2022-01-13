const colorsCount = {
    mint: 0,
    purple: 0,
    blue: 0,
}

const colorElements = document.querySelectorAll('.color');

colorElements.forEach(color => {

    const decreaseButton = color.querySelector('button:first-of-type');
    const increaseButton = color.querySelector('button:last-of-type');
    const countText = color.querySelector('p');

    decreaseButton.onclick = () => {
        colorsCount[color.classList[1]] -= 1;
        countText.textContent = colorsCount[color.classList[1]];
    }

    increaseButton.onclick = () => {
        colorsCount[color.classList[1]] += 1;
        countText.textContent = colorsCount[color.classList[1]];
        console.log(colorsCount);
    }
});
