import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";

interface HomeProps {}
const Home = (props: HomeProps) => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
