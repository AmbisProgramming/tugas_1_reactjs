import "./page/MenuKontak";
import MenuKontak from "./page/MenuKontak";
import "./page/MenuProduct";
import MenuProduct from "./page/MenuProduct";
import "./page/MenuTentangKami";
import MenuTentangKami from "./page/MenuTentangKami";
import "./page/MenuUtama";
import MenuUtama from "./page/MenuUtama";

const Header = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
