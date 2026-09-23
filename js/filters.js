import { cardsData } from './data.js'
import { createNewsCard } from './render.js'

const categoryButtons = document.querySelectorAll('.filter')
const footerCategoryButtons = document.querySelectorAll('.footer-category')

const containerSearchResults = document.querySelector('.search-results')

const containerFeatured = document.querySelector('.container--featured')
const containerNews = document.querySelector('.container--news')

const containerCategoryResults = document.querySelector('.category-results')
const categoryResultsTitle = document.querySelector('.category-results-title')
const categoryResultsList = document.querySelector('.category-results-list')

const categoryNoResults = document.querySelector('.category-no-results')

const inputSearch = document.getElementById('news-search')
const clearInputBtn = document.getElementById('clear-input')

const setActiveCategory = (category) => {

    categoryButtons.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.category === category))
    })

    footerCategoryButtons.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.category === category))
    })

}

const filterCategory = (category) => {

    inputSearch.value = ''
    clearInputBtn.classList.remove('is-visible')
    containerSearchResults.classList.remove('is-active')

    if (category === 'tudo') {

        containerFeatured.classList.remove('is-hidden')
        containerNews.classList.remove('is-hidden')

        containerCategoryResults.classList.remove('is-active')
        categoryResultsList.classList.remove('is-hidden')
        categoryNoResults.classList.remove('is-active')

        return

    }

    if (category === 'salvos') {

        containerFeatured.classList.add('is-hidden')
        containerNews.classList.add('is-hidden')

        containerCategoryResults.classList.add('is-active')
        categoryResultsTitle.classList.remove('is-active')
        categoryResultsList.classList.add('is-hidden')
        categoryNoResults.classList.add('is-active')

        return
        
    }
    
    const newsByCategory = cardsData.filter((cardData) => cardData.category === category)
    .map((card) => createNewsCard(card)).join('')

    const categoryNames = {

        mundo: 'Mundo',
        tecnologia: 'Tecnologia',
        negocios: 'Negócios',
        esportes: 'Esportes',
        salvos: 'Salvos'

    }

    const formattedCategory = categoryNames[category]

    categoryNoResults.classList.remove('is-active')
    containerFeatured.classList.add('is-hidden')
    containerNews.classList.add('is-hidden')
    
    containerCategoryResults.classList.add('is-active')
    categoryResultsList.classList.remove('is-hidden')
    categoryResultsTitle.classList.add('is-active')

    categoryResultsTitle.textContent = 'Notícias por categoria: '

    const strong = document.createElement('strong')
    strong.textContent = formattedCategory

    categoryResultsTitle.appendChild(strong)
    
    categoryResultsList.innerHTML = newsByCategory
    
}

export const initFilters = () => {

    categoryButtons.forEach((categoryBtn) => {

        categoryBtn.addEventListener('click', () => {

            setActiveCategory(categoryBtn.dataset.category)
            filterCategory(categoryBtn.dataset.category)
            console.log(categoryButtons)

        })

    })

    footerCategoryButtons.forEach((footerCategoryBtn) => {

        footerCategoryBtn.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })

            setActiveCategory(footerCategoryBtn.dataset.category)
            filterCategory(footerCategoryBtn.dataset.category)

        })

    })
    
}
