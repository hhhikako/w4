const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏94度で暑かった。だから :insertx: は外へ出た。 :inserty:についた時、 恐怖を感じ一瞬止まったが、その後 :insertz:. Bobはその一部始終を見ていたが、全く驚かなかった。 :insertx: の体重は400トンで、その日はとても暑い日だった。';
const insertX = ['ミッフィー', '岸田総理', '津田梅子'];
const insertY = ['津田塾大学', 'ディズニーランド', 'ハウステンボス'];
const insertZ = ['突然萎んで土の中へと吸い込まれていった。', '蒸発して空の方へと消えていった。', '　水たまりに溶けていなくなった。'];

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
    const temperature =  `華氏　${Math.round((94-32) * 5 / 9)}`;
    newStory = newStory.replace('摂氏94', temperature);
    newStory = newStory.replace('400トン', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
