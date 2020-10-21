import { useRouter } from "next/router";
import App from "../../app.config";

const app: any = App;

export default function Project() {
    const router = useRouter();
    // @ts-ignore
    const pid: number = parseInt(router.query.pid);
    const project = app.projects[pid];

    if (project === undefined) {
        router.push("/work");
    }

    return (
        <div>
            {pid}
        </div>
    )
}