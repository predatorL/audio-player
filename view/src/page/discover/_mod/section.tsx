import React from 'react';

const View = function(props: any) {
    return (
        <section className={`part ${props.className}`}>
                {props.children}
        </section>
    )
}

export default View
