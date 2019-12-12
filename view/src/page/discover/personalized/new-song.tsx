/**
 * @filename 最新音乐
 */
import React from 'react';
import Api from '@/api';
import InitHook from '../_mod/init-hook';

let _prop = {
    to: '/discover/new-song',
    title: '最新音乐',
    className: 'new-song',
    fetchData: Api.discover.getNewsong.bind(this, {limit: 10}),
    format: (source: any) => {
        return source.status === 200 ? source.data.result : [];
    }
}

function View()  {
    return (
        <InitHook {..._prop} render={(item: any, i: number) => {
            return (
                <figure key={i} className="item">
                    <img src={item.song.album.picUrl} alt=""/>
                    <i className="index">{i+1}</i>
                    <figcaption>
                        <div className="name">{item.name}</div>
                        <div className="singer">
                            {item.song.artists.map((artist:any) => artist.name).join('/')}
                        </div>
                    </figcaption>
                    <i className="mv"></i>
                </figure>
            )
        }}/>
    )
}

export default View;
