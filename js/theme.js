const themeBtn = document.getElementById('theme-toggle')
const icon = themeBtn.querySelector('i')
let isLight = false

const themeToggle = () => {
    
    isLight = !isLight
    let theme = isLight ? 'light' : 'dark'
    
    icon.classList.toggle('ri-sun-line', !isLight)
    icon.classList.toggle('ri-moon-line', isLight)

    localStorage.setItem('tema', theme)
    document.documentElement.setAttribute('data-theme', theme)

}

export const initThemeToggle = () => {

    themeBtn.addEventListener('click', themeToggle)
    
    const themeStorage = localStorage.getItem('tema')

    if (themeStorage) {
        isLight = themeStorage === 'light';
        document.documentElement.setAttribute('data-theme', themeStorage);
    }
    
    icon.classList.toggle('ri-sun-line', !isLight)
    icon.classList.toggle('ri-moon-line', isLight)
 
}  



