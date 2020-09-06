export default function Field(props) {
    return (
        <div className="field">
            {props.type === "text" ? 
                <input
                    placeholder={props.placeholder} 
                    type={props.type} /> : null}
            {props.type === "textarea" ? 
                <textarea placeholder={props.placeholder}></textarea> : null}
            {props.type === 'button' ?
                <button>{props.children}</button> : null}
        </div>
    );
}