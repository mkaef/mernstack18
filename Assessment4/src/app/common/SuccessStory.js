import React from "react"
let SuccessStory = ({props}) =>{
    return(<h3>The history is about sucess</h3>)

    let data ="data from SucessStory to child";
    return(
        <div>
    <h4>This is sucessComponent</h4>
           <SuccessStory data={data}/>
           </div>
    )
}
export default SuccessStory;