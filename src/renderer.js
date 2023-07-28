import './index.css';

import donut1 from './assets/donut-1.webp';
import donut2 from './assets/donut-2.webp';
import donut3 from './assets/donut-3.webp';
import donut4 from './assets/donut-4.webp';
import donut5 from './assets/donut-5.webp';
import donut6 from './assets/donut-6.webp';
import donut7 from './assets/donut-7.webp';
import donut8 from './assets/donut-8.webp';
import donut9 from './assets/donut-9.webp';
import donut10 from './assets/donut-10.webp';
import donut11 from './assets/donut-11.webp';
import donut12 from './assets/donut-12.webp';

const donutsAssets = [
  donut1, donut2, donut3, donut4, donut5, donut6,
  donut7, donut8, donut9, donut10, donut11, donut12
];
const donutsContainer = document.querySelector('#donuts');
const donutsCount = 20;

const getRandomNumber = (pMin = 1, pMax = 1_000_000_000) => {
  pMin = Math.round(pMin);
  pMax = Math.round(pMax);
  if (pMax < pMin) { let t = pMin; pMin = pMax; pMax = t;}
  return Math.random() * (pMax + 1 - pMin) + pMin;
}

const createDonut = () => {
  const donut = document.createElement('img');
  const speed = getRandomNumber(1, 10) * 1_000;
  const offset = getRandomNumber(0, 100);
  const scale = getRandomNumber(1, 10) / 10;
  const rotation = getRandomNumber(0, 30);
  const mirrored = getRandomNumber(0, 1) === 1;
  const useBlur = getRandomNumber(0, 100) >= 80;
  const blur = useBlur ? getRandomNumber(0, 5) : 0;
  donut.setAttribute('src', donutsAssets[Math.floor(getRandomNumber(0, 11))]);
  donut.style.setProperty('--donut-speed', `${speed}ms`);
  donut.style.left = `${offset}%`;
  donut.style.filter = `blur(${blur}px)`;
  donut.style.zIndex = useBlur ? 10 : 20;
  donut.style.transform = 'translateX(-50%) translateY(-100%)';
  donut.style.transform += ` scaleZ(${scale})`;
  donut.style.transform += ` rotateZ(${rotation}deg)`;
  donut.style.transform += mirrored ? ' scaleX(-1)' : '';
  donutsContainer.appendChild(donut);
  setTimeout(() => {
    createDonut();
    donutsContainer.removeChild(donut);
  }, speed);
}

for (let index = 0; index < donutsCount; index++) {
  setTimeout(() => createDonut(), getRandomNumber(0, 10_000));
}
