export default function Panel(props) {
    return (
        <div className={`space-ui-panel ${ props.classes ? props.classes : '' }`}>
            {props.children}
        </div>
    );
}