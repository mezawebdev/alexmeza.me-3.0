import dynamic from 'next/dynamic';
// const Joystick = dynamic(() => import('react-joystick'), { ssr: false });

export default function IntroGameState(props) {
    const joystick = {
        options: {
            mode: 'semi',
            catchDistance: 150,
            color: 'white'
        },
        containerStyle: {
            position: 'fixed',
            height: '150px',
            width: '150px',
            zIndex: "100",
            border: "1px solid red",
            bottom: "0",
            left: "0"
        },
        handler(manager) {
            manager.on("move", (e, stick) => {
                console.log("I moved");
            });
        }
    };

    return (
        <div className="spacheship-game-state">
            <div className="cockpit-overlay"></div>
            {/* <Joystick 
                joyOptions={joystick.options} 
                containerStyle={joystick.containerStyle}
                managerListener={joystick.handler} /> */}
        </div>
    );
}