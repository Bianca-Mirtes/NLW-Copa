function createGame(player1, hour, player2){
    return `    
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>

    `
}
let delay = -0.4;
function createCard(date, day, game){
    delay = delay + 0.4;
    return `
    <div class="card" style="animatio-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${game}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard("24/11", "quinta-feira", createGame("Coreia_do_sul", "10:00", "Uruguai") + createGame("Brasil", "16:00", "Servia"))
        + createCard("28/11", "segunda-feira", createGame("Coreia_do_sul", "10:00", "Gana") + createGame("Brasil", "13:00", "Suiça"))
        + createCard("02/12", "sexta-feira", createGame("Coreia_do_sul", "12:00", "Portugal") + createGame("Brasil", "16:00", "Camaroes"))