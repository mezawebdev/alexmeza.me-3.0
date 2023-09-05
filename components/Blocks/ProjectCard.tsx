import Panel from 'components/Layout/SpaceUI/Panel';
import { config } from 'app.config';
import { Description } from 'components/Blocks/Description';

interface Props {
  title: string;
  active: boolean;
  handlers: { [key: string]: (...any) => void };
  media: string[];
  description: string;
  appUrl: string;
  githubUrl: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  active,
  handlers,
  media,
  description,
  appUrl,
  githubUrl,
  technologies,
}: Props) {
  function getMediaAsset(assetObj) {
    switch (assetObj.type) {
      case 'image':
        return <img src={assetObj.src} />;
      case 'video':
        if (assetObj.isTransparent) {
          return (
            <video autoPlay loop muted playsInline>
              <source src={assetObj.srcMov} type="video/quicktime" />
              <source src={assetObj.srcWebM} type="video/webm" />
            </video>
          );
        }
        break;
    }
  }

  return (
    <div className={`project-card${active ? ' active' : ''}`}>
      <Panel>
        {active ? (
          <div className="loaded">
            <div className="title">{title}</div>
            <hr />
            <div className="images">
              <button onClick={() => handlers.openSpotlight(media, 0)}>
                {getMediaAsset(media[0])}
                <span>
                  <i className="las la-search-plus"></i>
                </span>
              </button>
            </div>
            <div className="general-info">
              <Description projectKey={description} />
            </div>
            <div className="options">
              {appUrl.length > 0 && (
                <a target="_blank" href={appUrl} rel="noreferrer">
                  <i className="las la-external-link-alt"></i>&nbsp;Go To App
                </a>
              )}
              {githubUrl.length > 0 && (
                <a target="_blank" href={githubUrl} rel="noreferrer">
                  <i className="lab la-github"></i>&nbsp;See On Github
                </a>
              )}
            </div>
            <div className="technology section">
              <p className="headline">Technologies Used</p>
              <div className="grid">
                {technologies.map((tech, i) => {
                  const techData = config.technologies.find((t) => {
                    return t.label === tech;
                  });
                  return (
                    <div key={i} className="tech">
                      <img src={techData.image} />
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </Panel>
    </div>
  );
}
