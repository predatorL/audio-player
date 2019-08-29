/**
 * @filename 独家放送
 */
import React from 'react';
import Api from '@/api';
import InitHook from './_mod/init-hook';

let _prop = {
    className: 'private-content',
    fetchData: Api.discover.getPrivatecontent,
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
                    <figcaption>{item.name}</figcaption>
                </figure>
            )
        }}/>
    )
}

export default View;
