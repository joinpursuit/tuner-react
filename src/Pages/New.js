import Form from "../Components/NewSong"; 

function NewForm() {

    return (
        <div className="Form">
            <p
                style={{ color: "#ff00ff" }}
             >
                Create a New Item</p>
            <Form />
        </div>

    )
}

export default NewForm;