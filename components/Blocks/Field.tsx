interface Props {
    type: string;
    placeholder?: string;
    handler: Function;
    children: any;
    error?: boolean;
    disabled?: boolean;
}

export default function Field(props: Props) {
    return (
        <div className={`field${ ' ' + props.type }${ props.disabled ? ' disabled' : '' }`}>
            {props.type === "text" || props.type === 'email' ? 
                <input
                    required
                    onKeyDown={e => props.handler(e)}
                    placeholder={props.placeholder} 
                    type={props.type} /> : null}
            {props.type === "textarea" ? 
                <textarea 
                    required
                    onKeyDown={e => props.handler(e)} 
                    placeholder={props.placeholder}>
                </textarea> : null}
            {props.type === 'button' ?
                <button 
                    type="submit"
                    onClick={e => props.handler(e)}>
                    {props.children}
                </button> : null}
        </div>
    );
}