import Header from "../../parts/header";
import Profil from "../../parts/profil";
import Banner from "../../parts/banner";
import Skills from "../../parts/skills";
import Portfolio from "../../parts/portfolio";
import Contact from "../../parts/contact";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="home">
      <Header/>
      <Profil/>
      <Banner/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
