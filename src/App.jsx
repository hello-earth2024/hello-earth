import Quiz from 'react-quiz-component';
import { quiz } from './assets/quiz';

function App() {
  return (
    <>
      Hello, Earth! We're going on!
      <Quiz quiz={quiz} shuffle={true} />
    </>
  )
}

export default App