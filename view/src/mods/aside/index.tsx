import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    children?: any,
    className?: string,
    to: string,
}

const NavItem = (props: Props) => {
    return (
        <div className="nav-item">
            <NavLink to={props.to}>{props.children}</NavLink>
        </div>
    )
}

const View: React.FC = () => {
  return (
    <aside className="app-aside">
        <section className="item">
            <NavItem to="/discover">发现音乐</NavItem>
            <NavItem to="/fm">私人FM</NavItem>
            <NavItem to="/video">视频</NavItem>
            <NavItem to="/friends">朋友</NavItem>
            <div className="divider">我的音乐</div>
            <NavItem to="/local">本地歌曲</NavItem>
            <NavItem to="/download">下载歌曲</NavItem>
            <NavItem to="/history">播放历史</NavItem>
        </section>
    </aside>
  );
}

export default View;
