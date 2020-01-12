import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useAuth0 } from "../utils/react-auth0-spa";
import history from "../utils/history"

const LocForm = () => {

    const [location, setLocation] = useState("")
    const { loading, getTokenSilently } = useAuth0();

    const AddLocation = async () => {
        try {
            const token = await getTokenSilently();
            if (loading || !getTokenSilently) {
              return <div>Loading...</div>;
            }
        
      
            const response = await fetch("/locations?location_name=" + location, {
              headers: {
                Authorization: `Bearer ${token}`
              },
              method: 'POST'
            });
      
            const responseData = await response.json();
            //Parsed the JSON map and get the message
            const loc = responseData.locations.map((value) => value);   
          } catch (error) {
            console.error(error);
          } 
    }


    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        console.log(location);
        AddLocation().then((response) => {
            history.push("/location");
        })
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="location" label="Location Name" required variant="filled" onChange={(e) => setLocation(e.target.value)}></TextField>
                <Button type="submit">Add Location</Button>
            </form>
        </div>
    );
}

export default LocForm;