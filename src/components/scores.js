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

  const scoreList = document.createElement('ul');
  scoreList.classList.add('scores-list');
  scoreList.innerHTML = `<li class="score"> Name: 100</li>
                        <li class="score"> Name: 100</li>
                        <li class="score"> Name: 100</li>
                        <li class="score"> Name: 100</li>
                        <li class="score"> Name: 100</li>`;
  wrapper.appendChild(heading);
  wrapper.appendChild(scoreList);
  return wrapper;
};
