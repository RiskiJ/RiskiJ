import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tulisan:this.props.tulisan
        };
    }
    
    pencetDoang=ev=>{
        this.setState({tulisan:" OK"});
    }

    cobain(){
        return(
            <Button
                color="success"
                size="sm"
                onClick={this.pencetDoang}
            >
              Edit
            {this.state.tulisan}
            </Button>
        )
    }

    render(){
        var button = this.cobain("coba");
        return(
        <Link to="/menu1">{button}</Link>
        )
    }
}

export default Home;