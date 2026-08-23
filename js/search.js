import { cardsData } from './data.js'

const inputSearch = document.getElementById('news-search')
const clearInputBtn = document.getElementById('clear-input')

const containerSearchResults = document.querySelector('.search-results')
const searchResultsTitle = document.querySelector('.search-results-title')
const searchResultsList = document.querySelector('.search-results-list')

const searchNoResults = document.querySelector('.search-no-results')
const clearNoResultsBtn = document.querySelector('.clear-search-btn');

const containerFeatured = document.querySelector('.container--featured')
const containerNews = document.querySelector('.container--news')

const getSearchNews = (e) => {

    const inputValue = e.target.value.trim()

    if (inputValue) {

        clearInputBtn.classList.add('is-visible')
        containerSearchResults.classList.add('is-active')
        containerFeatured.classList.add('is-hidden')
        containerNews.classList.add('is-hidden')

        searchResultsTitle.innerHTML = `Resultados encontrados para <strong>"${inputValue}"</strong>`

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

    const searchTerm = value

    const filtered = cardsData.filter((cardData) => cardData.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((card) => {
        return `<article class="card card--news">
                    <div class="card-top-row">
                        <span class="badge badge--${card.category}">${card.badge}</span>
                        <button type="button" class="favorite" aria-label="Salvar notícia" aria-pressed="false" data-id="${card.id}">
                            <i class="ri-star-line"></i>
                        </button>
                    </div>
                    <a href="..." target="_blank" rel="noopener noreferrer">
                        <img src="${card.image}" alt="">
                        <div class="card-content">
                            <h3>${card.title}</h3>
                            <p>${card.excerpt}</p>
                        </div>
                        <div class="card-meta">
                            <hr class="divider">
                            <span>${card.source}</span>
                            <span class="separator" aria-hidden="true">·</span>
                            <time datetime="${card.datetime}">${card.dateLabel}</time>
                        </div>
                    </a>
            </article>`
    }).join('')

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

    inputSearch.addEventListener('input', getSearchNews)
    clearInputBtn.addEventListener('click', clearSearchInput)
    clearNoResultsBtn.addEventListener('click', clearSearchInput);

}
