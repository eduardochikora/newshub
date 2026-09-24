import { cardsData } from './data.js'
import { createNewsCard } from './render.js'

const favoriteButtons = document.querySelectorAll('.favorite')
let isPressed = false

const toggleFavorite = () => {

    

}

export const initFavorites = () => {

    favoriteButtons.forEach((favoriteBtn) => {
    
        favoriteBtn.addEventListener('click', () => {
        
            console.log(favoriteBtn.dataset.id)
            
        
        })
    
    })

}