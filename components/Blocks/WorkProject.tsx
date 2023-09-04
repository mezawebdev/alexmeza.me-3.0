import Link from 'next/link';

interface Props {
  projectId: number;
  projectTitle: string;
  thumbnail: string;
}

export default function WorkProject(props: Props) {
  return (
    <Link
      href={`/work/projects?id=${props.projectId - 1}`}
      as={`/work/projects?id=${props.projectId - 1}`}>
      <div
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        className="work-project box-shadow">
        <div className="overlay">{props.projectTitle}</div>
      </div>
    </Link>
  );
}
