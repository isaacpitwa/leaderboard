export default class Constants {
    static baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

    static gameId = 'DWvyid6hBXKd4NqI0fDB';

    static SCORE_URI = `${this.baseUrl}/games/${this.gameId}/scores/` ;
}