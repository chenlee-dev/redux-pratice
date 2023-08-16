import React from 'react';
import withRouter from '../UseNavigate';
import Color from '../../HOC/Color';



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
            <div>Hello World From Home</div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);