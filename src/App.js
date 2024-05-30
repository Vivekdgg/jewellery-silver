
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
 import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './components/Globalstyle';

function App() {
  const theme = {
    colors: {
      heading: "#fff",
      heading2: "black",
      text: "#fff",
      white: "#fff",
      black: " #212529",
      helper: "#fff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      <Route path='/contact' element = {<Contact></Contact>}></Route>
      <Route path='/product' element = {<Product></Product>}></Route>
      <Route path='/blog' element = {<Blog></Blog>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </ThemeProvider>
      // <>
      // <Home></Home>
      // <About></About>
      // <Contact></Contact>
      // <Product></Product>
      // <Blog></Blog>
      // </>
  );
}

export default App;
