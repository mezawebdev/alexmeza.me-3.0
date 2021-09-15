import { useEffect, useState } from "react";
import IntroGameState from "./components/IntroGameState";
import SpaceshipGameState from "./components/SpaceshipGameState";

export default function Game(props) {
    const [gameState, setGameState]: any = useState({ screen: "intro" }),
        handlers = {
            startGame() {
                setGameState({ screen: "game" });

            }
        };

    useEffect(() => { if (!props.playingGame) props.launchGame() }, []);

    return (
        <div id="game-page">
            <div className="game-state">
                {gameState.screen === "intro" ? <IntroGameState startGame={handlers.startGame} /> : null}
                {gameState.screen === "game" ? <SpaceshipGameState /> : null}
            </div>
        </div>
    );
}