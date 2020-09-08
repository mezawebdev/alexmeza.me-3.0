export default function AboutBlock(props) {
    return (
        <div className={`about-block ${ props.align ? props.align : null } ${ props.bottomPadding ? 'bottom-padding' : null }`}>
            <div className="block-content space-ui-panel text-shadow">
                {props.children}
            </div>
        </div>
    );
}