const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏94度で暑かった。だから :insertx: は外へ出た。 :inserty:についた時、 暑くてくらっとしたが、その後 :insertz: Bobはその一部始終を見ていたが、全く驚かなかった。 :insertx: の体重は400トンで、その日はとても暑い日だった。';
const insertX = ['秋山', 'おざき', 'りん'];
const insertY = ['新宿まねき', '国分寺まねき', '国分寺マック'];
const insertZ = ['でんぐり返しをし倒れ込んだ。', 'りょうじさんが隠してくれている間にその場でイナバウアをし倒れた。', 'イナバウアを披露し、さくらんぼを口ずさみながらカラオケと戻っていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.454)} kg`;
    const temperature =  `摂氏　${Math.round((94-32) * 5 / 9)}`;
    newStory = newStory.replace('華氏94', temperature);
    newStory = newStory.replace('400トン', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
