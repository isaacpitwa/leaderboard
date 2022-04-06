import ApiClient from '../data/api_client.js';
import { Score } from '../data/models';

export default () => {
  const form = document.createElement('form');

  const headingText = document.createElement('h4');
  headingText.innerText = 'Add your score';
  form.appendChild(headingText);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  nameInput.name = 'name';
  nameInput.minLength = 2;
  nameInput.required = true;
  form.appendChild(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.type = 'number';
  scoreInput.placeholder = 'Your score';
  scoreInput.name = 'score';
  scoreInput.min = '0';
  scoreInput.required = true;
  form.appendChild(scoreInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('btn-refresh');
  submitBtn.innerText = 'Submit';

  form.onsubmit = (event) => {
    event.preventDefault();
    const score = new Score({ player: nameInput.value, score: scoreInput.value });
    ApiClient.addScore(score.tojson()).then(
      () => {
        form.reset();
      },
      (error) => {
        console.log(`[NEGATIVE]- Reponse Data  FAiled ${error}`);
      },
    );
  };

  form.appendChild(submitBtn);

  return form;
};
