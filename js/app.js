const tracklistreputation = document.getElementById('tracklistreputation')
const arrayElementRep = ['...Ready For It?', 'End Game', 'I Did Something Bad', 'Don´t Blame Me', 'Delicate', 'Look What You Made Me Do', 'So It Goes...', 'Gorgeous', 'Getaway Car', 'King Of My Heart', 'Dancing With Our Hands Tied', 'Dress', 'This Is Why We Can´t Have Nice Things', 'Call It What You Want', 'New Year´s Day']

let botonrep = document.getElementById("btnrep")
botonrep.addEventListener("click", respuestaClickrep)
function respuestaClickrep(){
    arrayElementRep.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        tracklistreputation.appendChild(li)
    }
        )
}

const tracklistevermore = document.getElementById('tracklistevermore')
const arrayElementEve = ['willow', 'champagne problems', 'gold rush', '´tis the damn season', 'tolerate it', 'no body, no crime (Feat. HAIM)', 'happiness', 'dorothea', 'coney island (feat. The National)', 'ivy', 'cowboy like me', 'long story short', 'marjorie', 'closure', 'evermore (feat. Bon Iver)']

let botoneve = document.getElementById("btneve")
botoneve.addEventListener("click", respuestaClickeve)
function respuestaClickeve(){
    arrayElementEve.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        tracklistevermore.appendChild(li)
    }
        )
}

const tracklistlover = document.getElementById('tracklistlover')
const arrayElementLov = ['I Forgot That You Existed', 'Cruel Summer', 'Lover', 'The Man', 'The Archer', 'I Think He Knows', 'Miss Americana & The Heartbreak Prince', 'Paper Rings', 'Cornelia Street', 'Death By A Thousand Cuts', 'London Boy', 'Soon You´ll Get Better (feat. The Chicks)', 'False God', 'You Need To Calm Down', 'Afterglow', 'ME! (feat. Brendon Urie of Panic! At The Disco)', 'It´s Nice To Have A Friend', 'Daylight']

let botonlov = document.getElementById("btnlov")
botonlov.addEventListener("click", respuestaClicklov)
function respuestaClicklov(){
    arrayElementLov.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        tracklistlover.appendChild(li)
    }
        )
}