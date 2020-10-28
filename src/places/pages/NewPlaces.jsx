import React from "react"
// import { Redirect } from "react-router-dom"
import Input from "../../shared/components/FormElements/Input"
import { VALIDATOREQUIRE } from '../../shared/util/validators';
import "./NewPlaces.css"

const NewPlaces = () => {
    return(
       <div>
           <form className = "place-form">
                <Input
                 type ="text"
                  label = "Title" 
                  element = "input"
                errorText= "Please enter a valid tititle"
                validators = {[VALIDATOREQUIRE()]}
                   />
                <Input type ="text" label = "Name" element = "input"/>
           </form>
       </div>
    )
}

export default NewPlaces;