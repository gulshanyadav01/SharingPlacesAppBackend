import React, { useCallback, useReducer } from "react"
// import { Redirect } from "react-router-dom"
import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
import "./NewPlaces.css"

const formReducer  = (state, action) => { 

}

const NewPlaces = () => {
        useReducer(formReducer, {
            inputs: {
                title: { 
                    value: "",
                    isValid: false
                },
                description: {
                    value: "",
                    isValid: false
                }
            },
            isValid: false
        });



        const titleInputHandler = useCallback((id, value, isValid) => { 

        },[]);
        const descriptionInputHandler = useCallback((id, value, isValid) => { 

        },[]);
    return(
       <div>
           <form className = "place-form">
                <Input
                id= "title"
                type ="text"
                label = "Title" 
                element = "input"
                validators = {[VALIDATOR_REQUIRE()]}
                errorText= "Please enter a valid title"
                onInput = {titleInputHandler}
                   />
                <Input 
                id = "description"
                label = "description" 
                element = "textarea"
                validators = {[VALIDATOR_MINLENGTH(5)]}
                errorText= "Please enter a valid description"
                onInput = {descriptionInputHandler}
                />
           </form>
       </div>
    )
}

export default NewPlaces;