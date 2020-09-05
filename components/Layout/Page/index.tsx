function Page(props) {
    return (
        <div className={`page${ props.subpage ? ' subpage' : null }`}>
            { props.children }
        </div>
    );
}

export default Page;