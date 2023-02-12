import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import NavBarChild from './components/NavBarChild';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      {/* <NavBarSimple /> */}
    </div>
  );
}

export default App;