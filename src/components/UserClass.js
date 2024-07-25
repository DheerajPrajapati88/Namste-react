import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
        }
    render(){
        const {name,loaction}=this.props;
        const {count,count2}=this.state;
        return (
            <div className='user-card'>
            <h1>Count : {count}</h1>

            <button onClick={()=>{
                this.setState({
                    count:count+1,
                })
            }}> add</button>
          <button onClick={()=>{
                this.setState({
                    count:count-1,
                })
            }}> minus</button>
            <h2>Name : {name}</h2>
            <h3>Loaction :{loaction}</h3>
            <h4>Contact : insta</h4>
            
        </div>
        )
    }
}
export default UserClass