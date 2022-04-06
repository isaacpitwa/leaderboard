import ApiClient from '../data/api_client.js';

export default () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('scores');

  const heading = document.createElement('div');
  heading.classList.add('heading');

  const headingText = document.createElement('h4');
  headingText.innerText = 'Recent Scores';
  heading.appendChild(headingText);

  const refreshBtn = document.createElement('button');
  refreshBtn.type = 'button';
  refreshBtn.classList.add('btn-refresh');
  refreshBtn.innerText = 'Refresh';
  heading.appendChild(refreshBtn);
  refreshBtn.onclick = () => { window.location.reload(); };

  const scoreList = document.createElement('ul');
  scoreList.classList.add('scores-list');
  wrapper.appendChild(heading);
  scoreList.innerHTML = 'Loading...';
  ApiClient.getScores().then(
    (scores) => {
      scoreList.innerHTML = '';
      scores.result.forEach((score) => {
        scoreList.innerHTML += `<li class="score"> ${score.user}: ${score.score}</li>`;
      });
    },
  ).catch(() => {
    scoreList.innerHTML = ' Error Loading ';
  });
  wrapper.appendChild(scoreList);
  return wrapper;
};
