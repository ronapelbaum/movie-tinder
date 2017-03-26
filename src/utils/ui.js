import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Icon = (props) => <i className={'fa fa-' + props.icon}></i>;

export const Button = (props) => {
    let content = props.icon ? <Icon icon={props.icon}/> : props.children;
    return <button className="btn btn-default" onClick={props.onClick}>{content}</button>;
};

export const ButtonGroup = (props) => {
    const buttons = props.buttons.map((props, index) => <Button onClick={props.onClick} icon={props.icon}
                                                                key={index}/>);
    return (<div className="btn-group">{buttons}</div>);
};


export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <a className="navbar-brand" href="#">{props.title}</a>
        </nav>
    );
};


export class MySlider extends Component{
    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    render() {
        let sliderSettings = {
            centerMode: true,
            // dots: true,
            // fade: true,
            arrows: true,
            infinite: true
        };
        return (
            <Slider ref={c => this.slider = c }{...sliderSettings}>
                {this.props.children}
            </Slider>
        );
    }
}

