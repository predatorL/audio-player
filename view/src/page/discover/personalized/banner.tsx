import React from 'react';
import Section from '../_mod/section';
import Api from '@/api';
import { Carousel } from 'antd';

class View extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            list: []
        }
    }

    format(item: object, i: number) {
        return {

        }
    }

    componentDidMount() {
        Api.discover.getBanner().then((res: any) => {
            console.log(res)
            const {status, data} = res;
            if(status === 200) {
                this.setState({
                    list: data.banners
                })
            }
        })
    }

    render () {
        const { state } : {state: any} = this;
        // 540 200
        return (
            <Section className="banner">
                <Carousel>
                    {state.list.map((item: any, i: number) => {
                        return (
                            <div className="banner-item" key={i}>
                                <img src={item.pic} alt=""/>
                            </div>
                        )
                    })}
                </Carousel>
            </Section>
          );
    }
}

export default View;
