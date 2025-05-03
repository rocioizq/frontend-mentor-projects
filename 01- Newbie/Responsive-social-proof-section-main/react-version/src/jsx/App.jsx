import  '../css/App.css' 
import 'animate.css';
import { Title } from './title.jsx'
import { Stars } from './stars.jsx'
import { Reviews } from './reviews.jsx';

function App() {
  return (
    <main>
      <div className="text">
        <Title />
        <div className="star-container">
          <Stars />
        </div>
      </div>
      
      <div className="reviews">
        <Reviews />
      </div>
        
    </main>
  )
}

export default App
