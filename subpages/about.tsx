export default function About(props) {
    console.log(props);
    return (
        <div id="page--about">
            <div className="header">
                <div className="ct">
                    <h1>ABOUT</h1>
                </div>
            </div>
            <div className="content">
                <div className="ct">
                    <div>
                        <img src="/assets/images/about-me.jpg" />
                        <div className="about-me">
                            My name is Alex Meza, I am a front-end web developer from San Diego, California.
                            I love creating user-friendly web applications and interfaces that bring long-lasting emotional connections with their users.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}