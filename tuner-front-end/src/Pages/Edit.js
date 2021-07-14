import SongEdit from "../Components/SongEdit";

function Edit({ updateSongs, songs}) {
    return (
        <div>
            <h2>Edit</h2>
            <SongEditForm updateSong={updateSong} songs={songs}/>
        </div>
    )
}