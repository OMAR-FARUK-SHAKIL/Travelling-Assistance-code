import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./checkOut.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const CheckOut = () => {
    // var date = new Date();

    const [travellingData,setTravellingData]=useState({});
    const [showForm,setShowForm] = useState(true)
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    console.log("form submitted", data);
    setTravellingData(data);
    setShowForm(!formShow); 
  };


  console.log(watch("example")); // watch input value by passing the name of it
let formShow = true;
  return (
    <div>{showForm &&
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
        <input
          name="location"
          defaultValue="Dhanmondi"
          ref={register({ required: true })}
          placeholder="Your current location"
        /><small>Pick From:</small>
        {errors.name && <span className="error">Location is required</span>}

        
        <input
          name="destination"
          defaultValue="Gazipur"
          ref={register({ required: true })}
          placeholder="Your destination"
        />
        <small>Pick To:</small>
        {errors.email && <span className="error">Destination is required</span>}

        <input type="submit" value="Search" />
      </form>
    
    }
    { (!showForm) &&
      <div>
          <h2>Current Location:{travellingData.location}</h2>
          <h2>Destination:{travellingData.destination}</h2>
          <h4>Traveller:{loggedInUser.name}</h4>
          {/* <h5>Date: {date}</h5> */}
      </div>
      }
 </div>
  );
};

export default CheckOut;
