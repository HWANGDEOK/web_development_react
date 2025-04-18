import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  

  return(
    <Router>
      <Routes>
      {/* 루트 경로 */}
      <Route path="/" element={<Home />} />
      {/* 영화 상세정보 */}
      <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}


export default App;