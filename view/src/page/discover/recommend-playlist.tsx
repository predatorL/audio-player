import React from 'react';
import Api from '@/api';
import Section from './_mod/section';

class View extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            list: []
        }
    }

    render () {
        const {list} : {list: object[]} = this.state;
        return (
            <Section className="banner">
                {
                    list
                }
            </Section>
          );
    }
}

export default View;
