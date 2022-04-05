import './style.css';
import { ScoresComponent, AddScoreComponent } from './components/index.js';

function component() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.appendChild(ScoresComponent());
  container.appendChild(AddScoreComponent());
  return container;
}

document.body.appendChild(component());
