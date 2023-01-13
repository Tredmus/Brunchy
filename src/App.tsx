import "./Styles/main.scss";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Order } from "./Components/Order/Order";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Order />
    </div>
  );
}

export default App;
