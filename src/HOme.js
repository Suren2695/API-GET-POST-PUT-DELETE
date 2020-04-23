import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            home:""
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((data)=>{
                //console.log(data)
                this.setState({
                    home: data
                },() => {
                    console.log(this.state.home)
                })
            }).catch((err) =>{
                console.log(err);
            })
        }
    
    postData() {
        const data = {
            "userId": 1,
            "id": 991,
            "title": "Surender Natarajan",
            "body": "Axios Post Request"
          }

          axios.post("https://jsonplaceholder.typicode.com/posts",data)
          .then((data) => {
              console.log(data);
          })
          .catch((err) =>{
              console.log(err);
          })
    }     

    updateData() {
        const data = {
            "userId": 1,
            "id": 991,
            "title": "Surender Natarajan",
            "body": "Axios Put Request"
        }
        axios.put("https://jsonplaceholder.typicode.com/posts/1",data)
        .then((data) => {
           console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    deleteData() {
        const data = {
            'userId': 1,
            "id": 991,
            "title": "Surender Natarajan",
            "body": "Axios Put Request"
        }
        axios.delete("https://jsonplaceholder.typicode.com/posts/1",data)
        .then((data) =>{
            console.log(data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return(
            <div>
                <h1>Home</h1>
                <p>Welcome to the Axios Demo</p>
                <button onClick = {this.postData}>Submit</button>
                <button onClick = {this.updateData}>Update</button>
                <button onClick = {this.deleteData}>Delete</button>
            </div>
        )
    }
    
}