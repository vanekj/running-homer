import './index.css';

const getRandomNumber = (pMin = 1, pMax = 1_000_000_000) => {
  pMin = Math.round(pMin);
  pMax = Math.round(pMax);
  if (pMax < pMin) { let t = pMin; pMin = pMax; pMax = t;}
  return Math.random() * (pMax + 1 - pMin) + pMin;
}

const getDonutsContainer = () => {
  return document.querySelector('#donuts');
}

const createDonutAssetPath = (donutNumber) => {
  return `/donut-${donutNumber}.webp`;
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
  donut.setAttribute('src', createDonutAssetPath(Math.floor(getRandomNumber(1, 12))));
  donut.style.setProperty('--donut-speed', `${speed}ms`);
  donut.style.left = `${offset}%`;
  donut.style.filter = `blur(${blur}px)`;
  donut.style.transform = 'translateX(-50%) translateY(-100%)';
  donut.style.transform += ` scaleZ(${scale})`;
  donut.style.transform += ` rotateZ(${rotation}deg)`;
  donut.style.transform += mirrored ? ' scaleX(-1)' : '';
  getDonutsContainer().appendChild(donut);
  setTimeout(() => {
    createDonut();
    getDonutsContainer().removeChild(donut);
  }, speed);
}

for (let index = 0; index < 20; index++) {
  setTimeout(() => createDonut(), getRandomNumber(0, 10_000));
}
