import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router";
import axios from 'axios';

import { apiURL } from "../util/apiURL";

const API = apiURL();

function SongEdit(props) {
    let {index} = useParams();
    let history = useHistory();

    useEffect(() => {
        axios.get(`${API}/songs/${index}`).then(
            (response) => setSong(response.data),
            (error) => history.push(`/not-found`)
        );
    }, [index, history])
}