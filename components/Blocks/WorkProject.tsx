import Link from "next/link";

export default function WorkProject(props) {
    console.log(props);
    return (
        <Link 
            href="/work/projects/[pid]" 
            as={`/work/projects/${ props.projectId }`}>
            <div
                style={{backgroundImage: `url(${ props.thumbnail })`}}
                className="work-project box-shadow">
                
            </div>
        </Link>
    );
}