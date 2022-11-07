import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import TuiterExplore from './tuiter/tuiter-explore';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

function App () {
  return (
    <BrowserRouter>
      <div className="container pb-2 pt-2">
      <Routes>
          <Route path="/*" element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter"
                 element={<Tuiter/>}/>
          <Route path="/tuiter/explore"
                 element={<TuiterExplore/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
