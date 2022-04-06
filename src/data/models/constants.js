export default class Constants {
    #baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

    #gameId = 'DWvyid6hBXKd4NqI0fDB';

    static SCORE_URI = `${this.#baseUrl}/games/${this.#gameId}/scores/` ;
}