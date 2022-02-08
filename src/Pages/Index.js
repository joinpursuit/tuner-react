import React from 'react';
import './Index.css'
import SongTable from '../Components/SongTable'

function Index() {
  return (
    <div className='Index'>
        <table>
          <SongTable />
        </table>
    </div>);
}

export default Index;
