function Page(props) {
    return (
        <div className={`page${ props.subpage ? ' subpage' : '' }${ props.autoHeight ? ' auto-height' : '' }`}>
            { props.children }
        </div>
    );
}

export default Page;