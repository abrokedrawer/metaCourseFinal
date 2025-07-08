
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../../components/HomePage";
import Menu from "../../components/Menu";


export default function Home() {
  return (
    <div className="lg:ml-30 lg:mr-30">
      <Header/>
      <HomePage />
      <Menu />
      <Footer />
    </div>
  );
}
