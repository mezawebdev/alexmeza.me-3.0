import NextLink from "next/link";

export default function Link(props) {
    return (
        <NextLink 
            href={props.path}
            className="link">
            <a>{ props.label }</a>
        </NextLink>
    );
}
