// import reactImg from "/src/assets/react-core-concepts.png" // 이것도 가능
import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css";

const reactDescriptionsKor = ['근본적인', '결정적인', '핵심적인', '필수적인'];
const reactDescriptionsEng = ['Fundamental', 'Crucial', 'Core', 'Essential']; 

function getRandomInt(max){ 
  return Math.floor(Math.random() * (max));
}

export default function Header2(){
  const description = getRandomInt(reactDescriptionsEng.length);
  return( 
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React 필수요소 복습</h1>
    <p>
      {reactDescriptionsEng[description]} React concepts you will need for almost any app you are
      going to build!

      <br />
      대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[description]} React 개념 학습👓
    </p>
  </header>
  );
}