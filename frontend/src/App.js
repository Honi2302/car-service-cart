import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Faq from './component/Faq';
import Blog from './component/Blog';
import Footer from "./component/Footer"
import Services from './component/Services';
import {Provider} from "react-redux"
import store from './Store';
import YourCart from "./component/YourCart"



function App() {
  return (
   <div>

<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/faq" element={<Faq/>}></Route>
<Route path="/blog" element={<Blog/>}></Route>
<Route path="/purachse" element={<Services/>}></Route>
<Route path="/cart" element={<YourCart/>}></Route>
</Routes> 
<Footer/>
</BrowserRouter>
</Provider>
   </div>
  );
}

export default App;