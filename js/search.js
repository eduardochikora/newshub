import { cardsData } from './data.js'
import { createNewsCard } from './render.js'

const inputSearch = document.getElementById('news-search')
const clearInputBtn = document.getElementById('clear-input')

const containerSearchResults = document.querySelector('.search-results')
const searchResultsTitle = document.querySelector('.search-results-title')
const searchResultsList = document.querySelector('.search-results-list')

const searchNoResults = document.querySelector('.search-no-results')
const clearNoResultsBtn = document.querySelector('.clear-search-btn');

const containerFeatured = document.querySelector('.container--featured')
const containerNews = document.querySelector('.container--news')

const containerCategoryResults = document.querySelector('.category-results')

const categoryButtons = document.querySelectorAll('.filter')
const categoryAllButton = document.querySelector('.filter--tudo')

const getSearchNews = (e) => {

    const inputValue = e.target.value.trim()

    if (inputValue) {

        categoryButtons.forEach((btn) => {

            btn.setAttribute('aria-pressed', 'false')

        })

        categoryAllButton.setAttribute('aria-pressed', 'true')
       
        clearInputBtn.classList.add('is-visible')
        containerSearchResults.classList.add('is-active')
        containerFeatured.classList.add('is-hidden')
        containerNews.classList.add('is-hidden')

        searchResultsTitle.textContent = 'Resultados encontrados para '

        const strong = document.createElement('strong')
        strong.textContent = `"${inputValue}"`

        searchResultsTitle.appendChild(strong)

        filterNews(inputValue)

    } else {

        clearInputBtn.classList.remove('is-visible')
        containerSearchResults.classList.remove('is-active')
        containerFeatured.classList.remove('is-hidden')
        containerNews.classList.remove('is-hidden')

    }
    
}

const clearSearchInput = () => {

    inputSearch.value = ''
    inputSearch.focus()
    
    clearInputBtn.classList.remove('is-visible')
    containerSearchResults.classList.remove('is-active')
    containerFeatured.classList.remove('is-hidden')
    containerNews.classList.remove('is-hidden')

}

const filterNews = (value) => {

    containerCategoryResults.classList.remove('is-active')

    const searchTerm = value

    const filtered = cardsData.filter((cardData) => cardData.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((card) => createNewsCard(card)).join('')

    if (filtered.length) {

        searchResultsList.innerHTML = filtered
        searchResultsList.classList.remove('is-hidden')
        searchNoResults.classList.remove('is-active')

    } else {

        searchResultsList.classList.add('is-hidden')
        searchNoResults.classList.add('is-active')

    }

}

export const initSearchNews = () => {

    inputSearch.addEventListener('focus', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })

    inputSearch.addEventListener('input', getSearchNews)
    clearInputBtn.addEventListener('click', clearSearchInput)
    clearNoResultsBtn.addEventListener('click', clearSearchInput);

}
