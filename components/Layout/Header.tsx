import Panel from "./SpaceUI/Panel";

export default function Header(props) {
    return (
        <div className="ct">
            <div className={`header ${ props.align ? props.align : '' }`}>
                {props.align === 'right' ? <span className={`box-shadow-white filter-shadow decor ${ props.align }`}></span> : null}
                <h3 className="text-shadow filter-shadow">{props.children}</h3>
                {props.align === 'left' ? <span className={`box-shadow-white filter-shadow decor ${ props.align }`}></span> : null}
            </div>
        </div>
    );
}