import styles from './App.module.scss';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
// import  {LeftBar}  from './components/leftBar/LeftBar.jsx';

function App() {
  return (
      
      <div className={styles.wrapper}>
        <Header />
        {/* <LeftBar /> */}
        <Content />
      </div>
  );
}

export default App;
