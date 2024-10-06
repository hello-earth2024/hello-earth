import '../assets/css/toast.css';

export default function Toast(props) {
    return (
        <div className="toast">{props.name} joined the group</div>
    )
}