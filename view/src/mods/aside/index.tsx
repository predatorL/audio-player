import React from 'react';
import { NavLink } from 'react-router-dom';

const View: React.FC = () => {
  return (
    <aside className="app-aside">
        <section className="item">
            <header>我的音乐</header>
            <ul>
                <li>
                    <NavLink to="/my-music/favorite">我喜欢</NavLink>
                    <NavLink to="/my-music/local">本地歌曲</NavLink>
                    <NavLink to="/my-music/download">下载歌曲</NavLink>
                    <NavLink to="/my-music/history">播放历史</NavLink>
                </li>
            </ul>
        </section>
    </aside>
  );
}

export default View;
