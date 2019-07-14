import React, { Component } from 'react'
import { json } from 'body-parser';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "" ,
            body : ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    onChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const post = {
            title : this.state.title ,
            body : this.state.body
        }

        fetch("https://jsonplaceholder.typicode.com/posts" , {
            method : "POST" ,
            headers : {
                'content-type' : 'application/json'
            } ,
            body : JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
    return (
        <div>
            <h1>Add post</h1>
            <form onSubmit = {this.onSubmit}>
                <div>
                    <label> Title : </label> <br/>
                    <input value = {this.state.title} onChange = {this.onChange} type="text" name = "title"/>
                </div>
                <div>
                    <label> body : </label> <br/>
                    <textarea value = {this.state.body} onChange = {this.onChange} name="body"></textarea> <br/>
                </div>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
    }
}

export default PostForm