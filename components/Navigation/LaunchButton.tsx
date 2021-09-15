import { useRouter } from "next/router";

export default function LaunchButton(props) {
    const router = useRouter(),
        onClick = () => {
            if (props.playingGame) {
                router.push("/");
                props.setPlayingGame(false);
            } else {
                router.push("/game");
            }
        }

    return (
        <button
            onClick={() => onClick()} 
            className="launch-button">
            <span>
                {props.playingGame ? <img src="/assets/images/home-solid.svg" /> : <img src="/assets/images/rocket-solid.svg" />}
                {props.playingGame ? "HOME" : "PLAY"}
            </span>
        </button>
    );
}