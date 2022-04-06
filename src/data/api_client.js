import { Constants } from './models/index.js';

export default class ApiClient {
    static addScore = async (score) => {
      const response = await fetch(Constants.SCORE_URI, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: score.tojson(),
      });
      if (response.status === 201) {
        return { status: true, data: JSON.parse(response.body) };
      }
      return { status: false, data: JSON.parse(response.body) };
    };

    static getScores = async () => {
      const response = await fetch(Constants.SCORE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        return { status: true, data: response.body };
      }
      return { status: false, data: JSON.parse(response.body) };
    };
}
