export default function Panel(props) {
    return (
        <div className={`space-ui-panel ${ props.classes ? props.classes : '' }`}>
            <div className="panel-children">{props.children}</div>
        </div>
    );
}