export default function Tech(props) {
    return (
        <div className={`tech ${ props.label }`}>
            <div>
                <img src={props.image} />
            </div>  
            <div>
                <span className="filter-shadow">{props.label}</span>
            </div>
        </div>
    );
}