import ButtonGradient from '../public/assets/svg/ButtonGradient'
import './App.css'
import Header from './components/Header';

function App() {

  return (
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
        </div>
          <ButtonGradient />
      </>
  );
}

export default App
