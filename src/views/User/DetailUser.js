import React from 'react';
import axios from 'axios';
import withRouter from '../Nav/UseNavigate';

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if(this.props.params && this.props.params.id) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data: {}
            })
            console.log('CHECK RESPONSE>>>:', res);
        }
        
    }

    handleBackButton = () => {
        const {navigate} = this.props;
        navigate(`/user`)
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
            
                <div>Hello From DETAILS USER with id: {this.props.params.id}</div>
                {isEmptyObj === false &&
                    <>
                    <div>User's name: {user.first_name} - {user.last_name}</div>
                    <div>User's email: {user.email}</div>
                    <div>
                        <img src={user.avatar} /> 
                    </div>
                    <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                    </>
                }
    
            </>
            
        )
    }
}

export default withRouter(DetailUser);