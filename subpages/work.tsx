import Header from "../components/Layout/Header";
import Body from "../components/Layout/Body";
import WorkProjects from "../components/Blocks/WorkProjects";
import WorkProject from "../components/Blocks/WorkProject";
import App from "../app.config";

export default function Work() {
    return (
        <div id="page--work">
            <Header align="right">WORK</Header>
            <Body>
                <div className="ct">
                    <WorkProjects>
                        {App.projects.map((project, i) => {
                            return <WorkProject key={i} />
                        })}
                    </WorkProjects>
                </div>
            </Body>
        </div>
    );
}