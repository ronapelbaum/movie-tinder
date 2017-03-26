import React from 'react';

export const Icon = (props) => <i className={'fa fa-' + props.icon}></i>;

export const Button = (props) => <button className="btn btn-default" onClick={props.onClick}>{props.children}</button>;

export const IconButton = (props) => <Button onClick={props.onClick}><Icon icon={props.icon}/></Button>;

export const ButtonGroup = (props) => {
    const buttons = props.buttons.map((props) => <IconButton onClick={props.onClick} icon={props.icon}/>);
    return (<div className="btn-group">{buttons}</div>);
};
