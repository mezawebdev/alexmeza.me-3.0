export default function Tech(props) {
    return (
        <div className="tech">
            <div>
                <img src={props.image} />
            </div>  
            <div>
                <span>{props.label}</span>
            </div>
        </div>
    );
}