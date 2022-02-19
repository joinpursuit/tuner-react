import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            
            <fieldset style={{ color: "#ff00ff"}}>
                {/* <legend 
                >Welcome to</legend> */}
                <br />
                <br />
                <h1 style={{textAlign: "center", color: "ff00ff"}}>
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