import React, { userSighIn } from "react";

function UserSignIn(){
    let inputRef = userSighIn()

    let handleSubmit = (evt) =>{
        evt.preventDefault()
        alert('Submitted value:${inputRef.current.value}')
    }
    return(<form onSubmit={handleSubmit}>
        <label>
            Please signIn:
        </label>
        <input type="text" ref={inputRef}/>
        <button type="submit">SignIn</button>

    </form>)

}
export default UserSignIn