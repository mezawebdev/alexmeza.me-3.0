import NextLink from 'next/link';

export default function Link(props: { path: string; label?: string }) {
  return (
    <NextLink href={props.path} className="link">
      <a>{props.label}</a>
    </NextLink>
  );
}
