interface Props {
  label: string;
  image: string;
}

export default function Tech(props: Props) {
  return (
    <div className={`tech ${props.label}`}>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <span className="filter-shadow">{props.label}</span>
      </div>
    </div>
  );
}
