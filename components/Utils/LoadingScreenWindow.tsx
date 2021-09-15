export default function LoadingScreen(props) {
    return (
        <div
            className={`${ props.fadeout ? "fadeout" : "" }`} 
            id="loading-screen">
            <div className="bg bg-1"></div>
            <div className="bg bg-2"></div>
            <div className="content">
                <div className="text">
                    WORKING
                </div>
                <div className="loading-bar">
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}