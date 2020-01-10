import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { useAuth0 } from "../utils/react-auth0-spa";
import AddLocForm from "../components/AddLocForm"

const LocationApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [showForm, setShowForm] = useState(null);
  const { loading, getTokenSilently } = useAuth0();

  const callApi = async () => {

    try {
      const token = await getTokenSilently();
      if (loading || !getTokenSilently) {
        return <div>Loading...</div>;
      }
  

      const response = await fetch("/locations", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'GET'
      });

      const responseData = await response.json();
      //Parsed the JSON map and get the locations array.
      const loc = responseData.locations.map((value) => value);
      setShowResult(true);
      setApiMessage(loc);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callApi()
  });

  const toggleForm = () => {
    
    showForm == null || showForm == false ? setShowForm(true) : setShowForm(false)
    console.log(showForm)
  }



  return (
    <div>
      <h1>Location API</h1>
      <ul>
        <li>{showResult && <code>{apiMessage}</code>} </li>
      </ul>
      <Button onClick={() => toggleForm()}>Add New Location
      </Button>
      {showForm && <code><AddLocForm /></code>}
    </div>
  );
};

export default LocationApi;