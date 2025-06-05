import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProjectSection from "./components/ProjectSection";
import Body from "./components/Body";
import Blog from "./components/Blog";
import More from "./components/More";
import Abouttab from "./components/Abouttab";


function App() {
  return (
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<ProjectSection />} />
            <Route path='/about' element={<Abouttab />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/more' element={<More />} />
          </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
