//変数
let unko = 'Hello World!';

//定数
const bigUnko = 'He... Hello World'

//配列
let inoki = ['1','2','3'];

//ループ
let index = 0;
while(index < 5){
  //繰り返したい命令
  index++;
  console.log(index);
}

//if/else
if(inoki.length > 3){
  console.log('ボンバイエ!');
}else{
  console.log('...');
}

//関数
//() => アロー関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ!');
  }else{
    console.log('...');
  }
}
test(2);
test(3);

//オブジェクト
const unko2 = {
  color:'pink',
  size: 'large',
  purfume:'mint',
  //関数も書き込める
  goToilet: () => {
    console.log('To Toilet');
  } 
};
console.log(unko2);
console.log(unko2.color);
console.log(unko2.goToilet())

//window ブラウザ全体のオブジェクト
console.log(window);
//console.log(window.alert('Hello Worde!'));

//document 表示されているページ全体のオブジェクト
console.log(document);
//console.log(document.getElementsByTagName('button'[0]));

//event
document.getElementsByTagName('button')[0].addEventListener('click',()=>　{
  //命令を書く
  window.alert('Hello Worde!');
});