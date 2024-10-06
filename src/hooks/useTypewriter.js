import  { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 15) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let prevText = '';
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        prevText += text[i];
        setDisplayText(prevText);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};