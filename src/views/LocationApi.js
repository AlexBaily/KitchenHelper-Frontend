import React, { useState } from "react";
import { useAuth0 } from "../utils/react-auth0-spa";

const LocationApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
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


  return (
    <>
      <h1>Location API</h1>
      <button onClick={callApi}>Get locations</button>
      {showResult && <code>{apiMessage}</code>}
    </>
  );
};

export default LocationApi;