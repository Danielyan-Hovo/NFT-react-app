import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light,dark} from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Roadmap from "./components/section/Roadmap";
import Showcase from "./components/section/Showcase";
import Team from "./components/section/Team";
import Faq from "./components/section/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={light}>
          <Navigation/>
          <Home/>
          <About/>
          <Roadmap/>
          <Showcase/>
          <Team/>
          <Faq/>
          <Footer/>
          <ScrollToTop/>
      </ThemeProvider>
    </>
  );
}

export default App;
