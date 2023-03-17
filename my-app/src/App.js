import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import NavBarChild from './components/NavBarChild';
import Contents from './components/Contents';
import ContentHooks from './components/ContentHooks';


function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      {/* <Contents /> */}
      <ContentHooks />
      {/* <NavBarSimple /> */}
    </div>
  );
}

export default App;