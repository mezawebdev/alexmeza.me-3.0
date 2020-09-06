export default function Header(props) {
    return (
        <div className={`header ${ props.align ? props.align : '' }`}>
            <div className="ct">
                <h3>{props.children}</h3>
            </div>
        </div>
    );
}