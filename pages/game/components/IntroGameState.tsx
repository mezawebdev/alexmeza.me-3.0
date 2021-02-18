
export default function IntroGameState(props) {
    return (
        <div className="intro-game-state">
            <div className="content">
                <div className="title">
                    <h1 className="text-shadow filter-shadow">
                        SPACE BATTLE
                    </h1>
                </div>
                <div className="menu">
                    <button onClick={() => props.startGame()}>START</button>
                    <br />
                    <button>CONTROLS</button>
                </div>
            </div>
        </div>
    );
}