import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {hasError: false};
    }

    //make the class based component an error boundary 
    componentDidCatch(error){
        console.log(error);
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }

}
export default ErrorBoundary;