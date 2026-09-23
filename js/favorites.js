const favoriteBtn = document.querySelector('.favorite')
let isPressed = false

const toggleFavorite = () => {
    
}

export const initFavorites = () => {

    favoriteBtn.addEventListener('click', () => {

        isPressed = !isPressed

        favoriteBtn.setAttribute('aria-pressed', String(isPressed))

    })

}