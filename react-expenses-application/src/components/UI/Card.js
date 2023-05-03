import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    //children is reserved name
    return <div className={classes}>{props.children}</div>
}
export default Card;