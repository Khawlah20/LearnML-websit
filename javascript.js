let currentSprite = 1;
const totalSprites = 4; // Number of sprites in the image
const spriteElement = document.getElementById('sprite');

document.getElementById('next').addEventListener('click', () => {
    currentSprite = (currentSprite % totalSprites) + 1;
    spriteElement.className = `sprite sprite-${currentSprite}`;
});
