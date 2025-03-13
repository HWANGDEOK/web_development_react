import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header2 from "./components/Header/Header2";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data"

function App() {

  // const [ selectedTopic, setSelectedTopic ] = useState('');

  function handSelect(selectedTopic){
    // selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
  }


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
        <TabButton onSelect={handSelect('굿나잇')}>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton>
        {/* <TabButton label='Components' />
        <TabButton label='JSX' />
        <TabButton label='Props' />
        <TabButton label='State' /> */}
      </menu>
      동적인 버튼 클릭의 결과물
    </section>
      </main>
    </div>
  );
}

export default App;
