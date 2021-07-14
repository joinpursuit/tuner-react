import React from 'react';
import Songs from "../Components/Songs"

function Index({songs}) {
    return (
        <div>
            Index 
            <Songs songs={songs}/>
        </div>
    )
}

export default Index;