import { useTypewriter } from "../hooks/useTypewriter";

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
  
    return <p>{displayText}</p>;
  };
  
  export default Typewriter;