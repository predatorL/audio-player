/**
 * @filename 推荐mv
 */
import React from 'react';
import Api from '@/api';
import InitHook from './_mod/init-hook';

let _prop = {
    className: 'mv',
    fetchData: Api.discover.getMv.bind(this, {
        limit: 4
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
