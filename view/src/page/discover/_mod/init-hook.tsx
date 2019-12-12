import React, {useState, useEffect} from 'react';
import Section from './section';
import {Link} from 'react-router-dom';

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
            <header className="part-name">
                <Link to={props.to}> { props.title } ></Link>
            </header>
            <div className="flex-box">
                {list.map(props.render)}
            </div>
        </Section>
    )
};
