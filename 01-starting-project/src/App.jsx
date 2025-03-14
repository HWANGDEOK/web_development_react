import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header2 from "./components/Header/Header2";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data_updated";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedTopic) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    // console.log(selectedTopic);
    setSelectedTopic(selectedTopic);
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
        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        {/* <TabButton label='Components' />
        <TabButton label='JSX' />
        <TabButton label='Props' />
        <TabButton label='State' /> */}
      </menu>
      {selectedTopic === '' ? <h3>버튼을 클릭하세요</h3> :
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic]['title']}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> }
    </section>
      </main>
    </div>
  );
}

export default App;
