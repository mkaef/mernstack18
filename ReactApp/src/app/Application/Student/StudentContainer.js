//create the connect method and add that to the component
//react-redux
import { connect } from "react-redux";
import { AddStudentToStore, SaveStudentToDB } from "../../../state/Student/studentAction";
import StudentComponent from "./StudentComponent.jsx";

// import AdminComponent from "./AdminComponent.jsx";
// let globalCondition = "If We need to show admin login"

let mapStateToProps = (store) => { //store is the redux states
    return {
        student : store.studentReducer.student
    //user - will be accessed as props.user in component
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
let mapDispatchToProps = (dispatch)=>{
    return {
        addStudent : (student)=>{
            dispatch(AddStudentToStore(student))
        },
        loginStudent : (student)=>{
            dispatch(SaveStudentToDB(student))
        }
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(globalCondition ? UserComponent : AdminComponent)    

//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)