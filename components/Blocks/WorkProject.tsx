import Link from "next/link";

export default function WorkProject(props) {
    return (
        <Link 
            href={`/work/projects?id=${ props.projectId - 1 }`}
            as={`/work/projects?id=${ props.projectId - 1 }`}>
            <div
                style={{backgroundImage: `url(${ props.thumbnail })`}}
                className="work-project box-shadow">
                
            </div>
        </Link>
    );
}