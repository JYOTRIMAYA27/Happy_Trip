

import {
  Airport,
  City,
  TravelClass,
  FlightCapacity,
} from "../models/happyTripModels.js";


// Using Async Await for API call for Airport Dropdown
class SearchAPI {


  constructor() { }

  async getAirports() {
    return await fetch("../store/airports.json")
      .then(async function (data) {
        //Empty Array to be returned
        return await data.json();
      })
      .then(async (data) => {


        // let airports = data;


        let airportslist = new Array();

        // let endData = new Array();
        for (let airport of data.airports) {

          // Creating City Object to be stored in airport
          let city = new City(undefined, undefined, airport.city_name);


          //Store the airport in the airports array
          airportslist.push(
            new Airport(
              airport.IATA_code,
              airport.ICAO_code,
              city,
              airport.airport_name
            )
          );

          // var option = `${airport.IATA_code}: ${airport.airport_name}, ${city.name}`;
          // endData.push(String(option));
          //   //Store airport in LocalStore - This method will be removed later once APIs are ready
          sessionStorage.setItem("airports", JSON.stringify(airportslist));
          //   //Return airports back to the caller

        }
        return await airportslist;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  async searchFlights(searchInfo) {
    return await fetch("../store/flights.json")
      .then(async function (data) {
        //Empty Array to be returned
        return await data.json();
      })
      .then(async (data) => {
        console.log(data);

        let flights = data;
        let flightlist = new Array();
        let flightData = new Array();
        for (let flight of flights.flights) {
          flightlist.push(
            new FlightCapacity(flight.name, flight.numberofseats)
          );
          flightData.push(flight.name);

          //Store flightlist in LocalStore - This method will be removed later once APIs are ready
          sessionStorage.setItem("flights", JSON.stringify(flightlist));
        }
        //Return the Collection of Search Results (Flight Schedules)
        return await flightlist;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  async getTravelClasses() {
    return await fetch("../store/travelClasses.json")
      .then(async function (data) {
        //Empty Array to be returned
        return await data.json();
      })
      .then(async (data) => {
        console.log(data);

        let TravelData = data;
        console.log(TravelData);

        //Empty Array to be returned
        let travelClasses = new Array();
        let classData = new Array();
        //Iterate through response

        for (let travelClass of TravelData.travelClasses) {
          console.log(travelClass);
          //Store the travel class in the travelClasses array
          travelClasses.push(
            new TravelClass(travelClass.code, travelClass.title)
          );
          classData.push(travelClass.code);

          //Store travelClasses in LocalStore - This method will be removed later once APIs are ready
          sessionStorage.setItem(
            "travelClasses",
            JSON.stringify(travelClasses)
          );
        }
        //Return travel Classes back to the caller
        return await travelClasses;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export { SearchAPI };
