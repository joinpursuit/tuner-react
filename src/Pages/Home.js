import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <br /> 
            <br />
            <br />
            <fieldset style={{ color: "#66A3A3"}}>
                <legend>Welcome to</legend>
                <br />
                <br />
                <h1 style={{textAlign: "center", color: "gray"}}>
                    Tuner App
                </h1>

                <Link to={'/songs'}></Link>
                <br />
                <br />
            </fieldset>
        </div>
    );
};

export default Home;