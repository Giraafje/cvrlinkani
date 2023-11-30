import { createRoot } from 'react-dom/client';
import './style.css';
import WallWithMessages from './components/WallWithMessages';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 style={{textAlign: 'center'}}>Cvrlikani</h1>
      </header>
      <main>
        <WallWithMessages/>
      </main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
