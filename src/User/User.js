import React from 'react';
import axios from 'axios';
import './User.scss';
import withRouter from '../Nav/UseNavigate';
class User extends React.Component {
        state = {
            listUser: []
        }
        async componentDidMount() {
            // axios.get('https://reqres.in/api/users?page=1')
            // .then(res => {
            //     console.log('Check RES :>>>>', res.data.data);
            // })

            let res = await axios.get('https://reqres.in/api/users?page=1');
            this.setState({
                listUser: res && res.data && res.data.data ? res.data.data : []
            })
            // let data = res.data.data;
            // let user = data.map( user => {
            //     return user.email;
            // });
            // console.log('USER EMAIL: >>', user);
        }
        
        handleViewDetailUser = (user) => {
            console.log('check prop:>>', user.id);
            const {navigate} = this.props;
            navigate(`/user/${user.id}`)


          };
        
        
            
        render() {
            let { listUser } = this.state;
            return (
                <div className="list-user-container">
                    <div className="title">
                        Fetch all list users
                    </div>
                    <div className="list-user-content">
                        {listUser && listUser.length > 0 && 
                            listUser.map((item,index) => {
                                return (
                                    <div className="child" key={item.id} 
                                        onClick={() => this.handleViewDetailUser(item)}>
                                          { index+1 } - {item.first_name} {item.last_name}
                                    </div>
                                )
                            })                       
                        }
                    </div> 
                </div>
            )
        }
}

export default withRouter(User);