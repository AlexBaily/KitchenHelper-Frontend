import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const AddLocForm = () => {

    const [location, setLocation] = useState("")


    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        console.log(location);
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

export default AddLocForm;