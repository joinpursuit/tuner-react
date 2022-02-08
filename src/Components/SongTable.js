import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react"

function SongTable() {
const [songs, setSongs] = useState([])
const URL = process.env.REACT_APP_API_URL




    return (
        <div className='SongTable'>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>artist</td>
                        <td>album</td>
                        <td>favorite</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default SongTable;
