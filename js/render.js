import { cardsData } from './data.js'

export const createNewsFeaturedCard = (card) => {

    return `<article class="card card--featured">
                <div class="card-top-row">
                    <span class="badge badge--${card.category}">${card.badge}</span>
                    <button type="button" class="favorite" aria-label="Salvar notícia" aria-pressed="${card.favorited}" data-id="${card.id}">
                        <i class="ri-star-line"></i>
                    </button>
                </div>
                <a href="..." target="_blank" rel="noopener noreferrer">
                    <div class="card-content">
                        <div class="card-content-text">
                            <span>Destaque</span>
                            <h1>${card.title}</h1>
                            <p>${card.excerpt}</p>
                        </div>
                        <img src="${card.image}" alt="">
                    </div>
                    <div class="card-meta">
                        <hr class="divider">
                        <span>${card.source}</span>
                        <span class="separator" aria-hidden="true">·</span>
                        <time datetime="${card.datetime}">${card.dateLabel}</time>
                    </div>
                </a>
            </article>`

}


export const createNewsCard = (card) => {

    return `<article class="card card--news">
                    <div class="card-top-row">
                        <span class="badge badge--${card.category}">${card.badge}</span>
                        <button type="button" class="favorite" aria-label="Salvar notícia" aria-pressed="${card.favorited}" data-id="${card.id}">
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

}

export const renderInitialCards = () => {

    const featured = cardsData.find((card) => card.featured)
    const news = cardsData.filter((card) => !card.featured)

    document.querySelector('.container--featured').innerHTML = createNewsFeaturedCard(featured)
    document.querySelector('.latest-news-container').innerHTML = news.map((cardNew) => createNewsCard(cardNew)).join('')

}


