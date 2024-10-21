const apiKey = '32f12713001d4b58948ae7f6847ae963'; 
const gameId = '34723';


async function fetchGameDetails() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
        const gameData = await response.json();
        console.log('Detalhes do jogo:', gameData);
    } catch (error) {
        console.error('Erro ao buscar detalhes do jogo:', error);
    }
}

fetchGameDetails();