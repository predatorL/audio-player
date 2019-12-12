/**
 * @filename 最新音乐
 */
import React from 'react';
import Api from '@/api';
import InitHook from '../_mod/init-hook';

let _prop = {
    to: '/discover/personalized',
    title: '主播电台',
    className: 'djprogram',
    fetchData: Api.discover.getDjprogram.bind(this, {limit: 10}),
    format: (source: any) => {
        return source.status === 200 ? source.data.result : [];
    }
}

function View()  {
    return (
        <InitHook {..._prop} render={(item: any, i: number) => {
            return (
                <figure key={i} className="item">
                    <img src={item.picUrl} alt=""/>
                    <figcaption>
                        <div className="name">{item.name}</div>
                    </figcaption>
                </figure>
            )
        }}/>
    )
}

export default View;
