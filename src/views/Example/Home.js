import React from 'react';
// import withRouter from '../Nav/UseNavigate';
import Color from '../HOC/Color';
import logo from '../../assets/images/pngimg.com - spongebob_PNG32.png';
import { connect } from 'react-redux';




class Home extends React.Component {
    
    // .history.push('/todo');
    // componentDidMount () {
    //     setTimeout(() => {
    //         return console.log('run now after 4s')
    //     },4000);
    //     console.log('did mount');     
    // }
    handleDeleteUser = (user) => {
        console.log('check user delete:',user);
        this.props.deleteUserRedux(user);

    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUsers= this.props.dataRedux;
        return (
            <>
            <div>Hello World From Home</div>
            <div>
                <img src={logo} alt='img' style={{width:"400px" ,height:"300px", marginTop: '40px'}}/>

            </div>
            <div>
                {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                    return(
                        <div key={item.id}>
                            {index + 1} - {item.name} 
                            &nbsp;<span onClick={()=> this.handleDeleteUser(item)}>x</span>
                        </div>
                    )
                })
                }
            <br/>
            <button onClick={() => this.handleCreateUser()}>Add New</button>
            </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));