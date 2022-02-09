import React from "react";
import SongList from "../../components/SongList/SongList";
import "./Index.css";
const Index = () => {
  return (
    <>
    <div className='gird'>

      <h2>Index</h2>
    </div>
      <div className="index">
        <section>
          <aside className="aside-a"> Left Pane
          </aside>
        </section>

        <SongList />
        <section>
          <aside className="aside-b">Right Pane
          </aside>
        </section>
      </div>
    </>
  );
};

export default Index;
