import Link from "next/link";

export default function WorkProject(props) {
    return (
        <Link 
            href="/work/projects/[pid]" 
            as={`/work/projects/${ props.id }`}>
            <div
                style={{backgroundImage: `url(${ props.thumbnail })`}}
                className="work-project box-shadow">
                
            </div>
        </Link>
    );
}