import '../assets/css/bubble.css';
import Typewriter from './Typewriter';
import cardosinho from '../assets/img/allanzinho.png';
import livinha from '../assets/img/livinha.png';
import enriquinho from '../assets/img/enriquinho.png';
import { motion } from "framer-motion"

function Bubble(props) {
    let avatarSrc, displayName;

    // Definir os valores baseados no nome fornecido em props
    if (props.name === "Allan") {
        avatarSrc = cardosinho;
        displayName = "Allan";
    } else if (props.name === "Olivia") {
        avatarSrc = livinha;
        displayName = "Olivia";
    } else if (props.name === "Lucas") {
        avatarSrc = enriquinho;
        displayName = "Lucas";
    } else if (props.name === "Sci") {
        avatarSrc = cardosinho;
        displayName = "A Futurist Scientist"
    }

    return <motion.div className="container" initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}>
        <img src={avatarSrc} className="avatar" />
        <div className="message-wrapper">
            <p className="name">{displayName}</p>
            <div className="message">
                <Typewriter text={props.children} />
            </div>
        </div>
    </motion.div>
}

export default Bubble;