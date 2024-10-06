import Quiz from 'react-quiz-component';
import { quiz } from './assets/quiz';
import LandingPage from './pages/LandingPage';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <>
      {/* Hello, Earth! We're going on!
      <Quiz quiz={quiz} shuffle={true} /> */}

      {/* <LandingPage /> */}

        <Chatbot />
    </>
  )
}

export default App