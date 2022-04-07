import ApiClient from '../data/api_client.js';

const pageSize = 10;
const paginationList = [];
export default () => {
  let scoresToshow; let
    indexShowing;
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
  refreshBtn.innerHTML = '<i class="fa fa-refresh"></i>';
  refreshBtn.innerHTML += ' Refresh';
  heading.appendChild(refreshBtn);
  refreshBtn.onclick = () => { window.location.reload(); };

  const scoreList = document.createElement('ul');
  scoreList.classList.add('scores-list');
  wrapper.appendChild(heading);

  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  const leftBtn = document.createElement('button');
  leftBtn.innerHTML = '&laquo;';
  leftBtn.onclick = () => {
    if (scoresToshow && indexShowing > 0) {
      scoresToshow = paginationList[indexShowing - 1];
      scoreList.innerHTML = '';
      scoresToshow.forEach((score) => {
        scoreList.innerHTML += `<li class="score"> ${score.user}: ${score.score}</li>`;
      });
      indexShowing -= 1;
    }
  };
  pagination.appendChild(leftBtn);

  const rightBtn = document.createElement('button');
  rightBtn.innerHTML = '&raquo;';

  rightBtn.onclick = () => {
    if (scoresToshow && indexShowing < paginationList.length - 1) {
      scoresToshow = paginationList[indexShowing + 1];
      scoreList.innerHTML = '';
      scoresToshow.forEach((score) => {
        scoreList.innerHTML += `<li class="score"> ${score.user}: ${score.score}</li>`;
      });
      indexShowing += 1;
    }
  };

  scoreList.innerHTML = 'Loading...';
  ApiClient.getScores().then(
    (scores) => {
      scoreList.innerHTML = '';
      const sortedScores = scores.result.sort((a, b) => b.score - a.score);
      for (let i = 0; i < scores.result.length; i += pageSize) {
        const scoresToShowing = sortedScores.slice(i, i + pageSize);
        paginationList.push(scoresToShowing);
      }
      [scoresToshow] = paginationList;
      indexShowing = 0;
      scoresToshow.forEach((score) => {
        scoreList.innerHTML += `<li class="score"> ${score.user}: ${score.score}</li>`;
      });
      paginationList.forEach((pageElements, index) => {
        const pageBtn = document.createElement('button');
        pageBtn.innerHTML = index + 1;
        pageBtn.onclick = () => {
          scoresToshow = paginationList[index];
          indexShowing = index;
          scoreList.innerHTML = '';
          scoresToshow.forEach((score) => {
            scoreList.innerHTML += `<li class="score"> ${score.user}: ${score.score}</li>`;
          });
        };
        pagination.appendChild(pageBtn);
        pagination.appendChild(rightBtn);
      });
    },
  ).catch(() => {
    scoreList.innerHTML = ' Error Loading ';
  });
  wrapper.appendChild(scoreList);
  wrapper.appendChild(pagination);
  return wrapper;
};
