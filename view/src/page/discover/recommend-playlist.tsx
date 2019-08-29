/**
 * @filename 推荐歌单
 */
import React from 'react';
import Api from '@/api';
import Section from './_mod/section';

import InitHook from './_mod/init-hook';

let _prop = {
    className: 'playlist',
    fetchData: Api.playlist.getRecommend.bind(this, {
        limit: 9
    }),
    format: (source: any) => {
        return source.status === 200 ? source.data.result : [];
    }
}

function View()  {
    return (
        <InitHook {..._prop} render={(item: any, i: number) => {
            return (
                <figure key={item.id} className="item">
                    <img src={item.picUrl} alt=""/>
                    <figcaption>{item.name}</figcaption>
                </figure>
            )
        }}/>
    )
}

export default View;
