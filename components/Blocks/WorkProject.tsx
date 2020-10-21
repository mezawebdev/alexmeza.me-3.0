import { useRouter } from "next/router";
import Link from "next/link";

export default function WorkProject(props) {
    const router = useRouter();
    
    return (
        <Link href={`/work/${ props.projectId }`}>
            <div
                style={{backgroundImage: `url(${ props.thumbnail })`}}
                className="work-project box-shadow">
                
            </div>
        </Link>
    );
}