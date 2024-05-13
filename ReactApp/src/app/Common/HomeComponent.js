import React, {Component, PureComponent} from "react"

//this component implements shouldComponentUpdate in itself to reduce the render on state change
export default class Home extends PureComponent {
//export default class Home extends Component {
    //Creating live cycle methode
    constructor(props){
        super(props)
        this.state = {
            age : 17,
            userName : "Default"
        }

        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        this.incrementAge();
    }

    incrementAge = ()=>{
        //this.incrementAgeLoop = setInterval(()=>{ //continous loop
        //    this.incrementAgeVal++
        //    this.setState({
        //        age : this.incrementAgeVal
        //    })

        //  console.log(this.incrementAgeVal) 

        //},2000) // runs every 2 seconds foreover - unless clear

        //setTimeout(()=>{
        //    clearInterval(this.incrementAgeLoop)
        //},5000)
    }
    
    //html is rended on browser, executes only after the first render
    componentDidMount(){
        //we can access the html and make calls to server API here to pull the data
    }

    //destruction life cycle method
    componentWillUnmount(){
        //any api subsriptions, loops should be stopped here as this data may create mess
        
            console.log("componentWillUnmount - is called")
            //clearInterval(this.incrementAgeLoop)
        
    }

    //evt - is js object which contain information about the control which invoked this event
    onTextChange = (evt)=>{
       let element = evt.target;
       let value = element.value;
       this.setState({
        userName : value
    })
       console.log(value)
       evt.preventDefault() //will expain in detail
    }

    updateName = (evt)=>{
        console.log("Updating the nameto age!!")
        this.setState({
            age : this.state.userName
        })

        evt.preventDefault()
    }

    // do not implement this if in pure component
    //update life cycle methods

      //shouldComponentUpdate(nextPops, nextState){
      //    console.log("nextPops ", nextPops)
      //     console.log("nextState ", nextState)

      //     if (this.state.age == nextState.userName ) {
      //              return false // should not call render method to create virtual dom
      //           } else {
      //               return true // keep calling render method     
      //           }
      //       }

             getSnapshotBeforeUpdate(prevState, prevProps){
                console.log("getSnapshotBeforeUpdate");
                console.log("prevState", prevState);
                console.log("prevProps", prevProps);
                return {
                    prevState,
                    prevProps
                }
            }

            componentDidUpdate(prevState, prevProps){
                console.log("componentDidUpdate");
                console.log("prevState",prevState);
                console.log("prevProps", prevProps);
        
                // this.setState({
                //     uState : prevState.uState
                // })
            }


    //getSnapshotBeforeUpdate(nextPops, nextState){
    //    return true;
    //}

    //create and update virtual DOM
render (){
    console.log("render method called")
    return(
        <div className="col-md-12">
            <h1>Home Componenet</h1>
            <h2>User Age is {this.state.age}</h2>

            {/*controlled way of creating componenet direcrtly - state directly coupled with changes*/}
            <div className="form col-mid-12">
                <div className="form control">
                    <div className="col-mid-3">
                        <b>User Name</b>
                        </div>
                        <div className="col-mid-7"> 
                            <input type="text" className="form-control textbox" value={this.state.userName}
                                   placeholder="Plaese provide user name" onChange={this.onTextChange}></input>
                   </div>
                   <div className="col-md-3">
                        <button className={"form-control btn btn-primary col-md-1"} 
                            onClick={this.updateName} 
                        >Update Name to Age</button>
                        </div>
                </div>
            </div>
        </div>
       )
    }

}



//class component 
//life cycle methods