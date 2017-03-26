import React from 'react';

export const Icon = (props) => <i className={'fa fa-' + props.icon}></i>;

export const Button = (props) => {
    let content = props.icon ? <Icon icon={props.icon}/> : props.children;
    return <button className="btn btn-default" onClick={props.onClick}>{content}</button>;
};

export const ButtonGroup = (props) => {
    const buttons = props.buttons.map((props, index) => <Button onClick={props.onClick} icon={props.icon} key={index}/>);
    return (<div className="btn-group">{buttons}</div>);
};
