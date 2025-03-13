// import Header from "./components/Header";
// import 이미지 변수명 from "경로";
// import reactImg from "./assets/react-core-concepts.png"
// import "./components/Header/Header.css"
import CoreConcepts from "./components/CoreConcepts";
import Header2 from "./components/Header/Header2";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data"

function App() {
  return (
    <div>
      <Header2 />
      <main>
      <section id="core-concepts">
        <h2>핵심 개념들 of React</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        {/* <TabButton>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton> */}
        <TabButton label='Components' />
        <TabButton label='JSX' />
        <TabButton label='Props' />
        <TabButton label='State' />
      </menu>
    </section>
      </main>
    </div>
  );
}

export default App;
