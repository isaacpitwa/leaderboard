const SCORE_URI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DWvyid6hBXKd4NqI0fDB/scores/';

export default class ApiClient {
    static addScore = async (score) => {
      const response = await fetch(SCORE_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: score,
      });
      const responseData = await response.json();
      return responseData;
    };

    static getScores = async () => {
      const response = await fetch(SCORE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };
}
