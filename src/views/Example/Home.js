import React from 'react';
import withRouter from '../Nav/UseNavigate';
import Color from '../HOC/Color';
import logo from '../../assets/images/pngimg.com - spongebob_PNG32.png';




class Home extends React.Component {
    
    // .history.push('/todo');
    componentDidMount () {
        setTimeout(() => {
            return console.log('run now after 4s')
        },4000);
        console.log('did mount');     
    }

    render() {
        console.log('Check PROPS>>>>>>:', this.props);
        return (
            <>
            <div>Hello World From Home</div>
            <div>
                <img src={logo} style={{width:"500px" ,height:"400px", marginTop: '40px'}}/>

            </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);