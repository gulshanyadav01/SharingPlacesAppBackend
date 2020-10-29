import React from 'react'
import  {useParams } from "react-router-dom"
import Button from '../../shared/components/FormElements/Button'
import Input from "../../shared/components/FormElements/Input"
import "../../places/pages/PlaceForm.css"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators'

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "empire state building",
        description: "one of the most famous sky scappers in the world",
        imageUrl:"https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        address: "Noida",
        location: {
            lat:123,
            lng:13
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Noida state building",
        description: "one of the most famous sky scappers in the world",
        imageUrl:"https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        address: "Noida",
        location: {
            lat:123,
            lng:13
        },
        creator: "u2"
    }
]


const UpdatePlace = () => { 
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if(!identifiedPlace) { 
        return (
        <div className = "center">
            <h2>Could not find a place !</h2>
        </div>
        );
    }

        return (
        <form className="place-form">
        <Input id = "title"
            element = "input"
            type = "text"
            label = "title"
            validators = {[VALIDATOR_REQUIRE()]}
            errorText = "please enter a valid title"
            onInput = {() => { }}
            value = {identifiedPlace.title}
            valid = {true}
        />
        <Input id = "description"
            element = "textarea"
        
            label = "description"
            validators = {[VALIDATOR_MINLENGTH(5)]}
            errorText = "please enter a valid description"
            onInput = {() => { }}
            value = {identifiedPlace.description}
            valid = {true}
        />
        <Button type ="submit" disabled = {true} >
            UpdatePlace
        </Button>


        </form>)
    

}

export default UpdatePlace; 