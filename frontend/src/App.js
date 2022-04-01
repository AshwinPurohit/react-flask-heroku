import React, { useState } from "react";
//import Button from 'material-ui/Button'

export default function MyComponent() {
    const [toggleButton, setButton] = useState("Off");

    return(
        <div>
            <p>This is a button that you can toggle on and off</p>
                variant="outlined"
                onClick={() => {
                    fetch("http://127.0.0.1:5000/toggle_button/" + toggleButton)
                        .then(response => 
                            response.json()
                        )
                        .then(data => {
                            setButton(data.button)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }}
                {toggleButton}
        </div>
    );
}