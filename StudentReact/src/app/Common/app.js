import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Constructor Method'
    }
  }
  render() {
    return (
      <div>
       <p> This is a {this.state.name}</p>
      </div>
    )
  }

  static getDerivedStateFromProps(props, state) {
    return {name: props.nameFromParent} 
  }
render() {
    return (
        <div>
            This is a {this.state.name}
        </div>
    )
}

render() {
    return (
        <div>
            <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
        </div>
    )
}

render() {
    return (
        <>
             <p>This is a render method</p>
        </>
    )
}
constructor(props){
    super(props)
this.state = {
    name: 'This name will change in 2 sec'
  }
}
componentDidMount() {
  setTimeout(() => {
    this.setState({name: "This is a componentDidMount Method"})
  }, 2000)

}
render() {
  return (
    <div>
     <p>{this.state.name}</p>
    </div>
  )
}

constructor(props){
    super(props)
    this.state = {
      name: 'shouldComponentUpdate Method'
    }
  }
  shouldComponentUpdate() {
    return false; //Change to true for state to update
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "componentDidMount Method"})
    }, 2000)
  }
  render() {
    return (
      <div>
       <p>This is a {this.state.name}</p>
      </div>
    )
  }
   updateName = (evt) =>{
    console.log("Updating name")

    this.setState({
        name: this.state.name
    })

    evt.preventDefault()

  }

}


