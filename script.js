const btnEl = document.querySelector('.btn')
const nameEl = document.querySelector('.name-emoji')
const apiKey = '8c0a442a7f48eac04ef3e7e64b4936533397f672'
const apiUrl = `https://emoji-api.com/emojis?access_key=${apiKey}`
let data = []
btnEl.addEventListener('click', fetchEmoji)

async function fetchEmoji() {
    try {
        const response = await fetch(apiUrl)
        console.log(response)
        if (!response.ok) throw new Error('An error happened. Try again later')
        data = await response.json()
        const emojiRandom = data[randomNumber(data)]
        const character = emojiRandom.character
        const slug = emojiRandom.slug
        nameEl.innerText = slug
        btnEl.innerText = character
        console.log(character)
        console.log(slug)
    } catch (error) {
btnEl.innerText = 'Click again'
nameEl.innerText = 'Problem with connection'
    }
}


function randomNumber(array) {
    return Math.floor(Math.random() * array.length)
}