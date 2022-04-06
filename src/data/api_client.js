import { Constants } from './models/index.js';

export default class ApiClient {
    static addScore = async (score) => {
      const response = await fetch(Constants.SCORE_URI, {
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
      const response = await fetch(Constants.SCORE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };
}
