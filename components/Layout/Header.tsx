export default function Header(props) {
    return (
        <div className={`header ${ props.align ? props.align : '' }`}>
            <div className="ct">
                {props.align === 'right' ? <span className={`decor ${ props.align }`}></span> : null}
                <h3>{props.children}</h3>
                {props.align === 'left' ? <span className={`decor ${ props.align }`}></span> : null}
            </div>
        </div>
    );
}