import React, {useState, useEffect} from 'react';
import Section from './section';

export default function (props: any) {
    const [list, setList] = useState([]);
    useEffect(() => {
        props.fetchData().then((data: any) => {
            let _data = props.format(data);
            setList(_data);
        })
    }, [])
    return (
        <Section className={props.className}>
            <div className="flex-box">
                {list.map(props.render)}
            </div>
        </Section>
    )
};
