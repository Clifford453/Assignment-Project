import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingFrom";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
export default function BookingPage() {
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [avilableTimes, dispatch] =useReducer(updateTimes,output);

    return(
        <>
        <Heading/>
        <ReservationForm avilableTimes={avilableTimes} updateTimes={dispatch} />

        </>
    );
}