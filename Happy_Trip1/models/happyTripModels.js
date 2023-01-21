class Flight {
    constructor(id, number, name, flightcapacity = [], airline) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.flightcapacity = flightcapacity;
        this.airline = airline;
    }
}

class FlightCapacity {
    constructor(name, numberofseats) {
        this.name = name;
        this.numberofseats = numberofseats;
    }
}

// Class creation
class Airline {
    constructor(id, name, logo, code, flights = []) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.code = code;
        this.flights = flights;
    }
}

class FlightSchedule {
    constructor(
        flight,
        airline,
        date,
        time,
        duration,
        seatsAvailability,
        fromCity,
        toCity,
        routes = [],
        price
    ) {
        this.flight = flight;
        this.airline = airline;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.seatsAvailability = seatsAvailability;
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.routes = routes;
        this.price = price;
    }
}

class Passenger {
    constructor(s_no, name, age, gender, seat_no, status) {
        this.s_no = s_no;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.seat_no = seat_no;
        this.status = status;

    }
}
class BookingInfo {
    constructor(
        Transaction_id,
        From,
        Airline,
        FlightNoAndName,
        To,
        Date,
        Schedule,
        BoardingPoint,
        DateofBoarding,
        Duration
    ) {
        this.Transaction_id = Transaction_id;
        this.From = From;
        this.Airline = Airline;
        this.FlightNoAndName = FlightNoAndName;
        this.To = To;
        this.Date = Date;
        this.Schedule = Schedule;
        this.BoardingPoint = BoardingPoint;
        this.DateofBoarding = DateofBoarding;
        this.Duration = Duration;
    }
}

class PriceInfo {
    constructor(
        Fare,
        AirlineFee,
        Cleartrip_fee,
        Total

    ) {
        this.Fare = Fare;
        this.AirlineFee = AirlineFee;
        this.Cleartrip_fee = Cleartrip_fee;
        this.Total = this.Fare + this.AirlineFee + this.Cleartrip_fee;

    }

}

class Baggage {
    constructor(baggageType) {
        this.baggageType = baggageType;
    }
}

class Booking {
    constructor(
        schedule,
        passangers = [],
        id,
        bookingDateTime,
        termsAndCondition,
        price,
        paymentInfo
    ) {
        this.schedule = schedule;
        this.passangers = passangers;
        this.id = id;
        this.bookingDateTime = bookingDateTime;
        this.termsAndCondition = termsAndCondition;
        this.price = price;
        this.paymentInfo = paymentInfo;
        this.baggages = new Map();
    }

    addBaggage(baggage, quantity) {
        this.baggages.set(baggage, quantity);
    }
}

class PaymentInfo {
    constructor(
        paymentId,
        paymentMode,
        amount,
        transactionNumber,
        paymentStatus,
        paymentDateTime
    ) {
        this.paymentId = paymentId;
        this.paymentMode = paymentMode;
        this.amount = amount;
        this.paymentStatus = paymentStatus;
        this.transactionNumber = transactionNumber;
        this.paymentDateTime = paymentDateTime;
    }
}

class SearchInfo {
    constructor(direction, fromCity, toCity, fromDate, toDate, adults, children, infants) {
        this.direction = direction;
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
    }

}

class City {
    constructor(id, code, name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }
}

class Route {
    constructor(fromCity, toCity, distance) {
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.distance = distance;
    }
}

class Airport {
    constructor(IATA_code, ICAO_code, city, airportName) {
        this.IATACode = IATA_code;
        this.ICAOCode = ICAO_code;
        this.city = city;
        this.airportName = airportName;
    }
}
class TravelClass {
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
}

// Exports
export { Airline };
export { Flight };
export { FlightCapacity };
export { Baggage };
export { FlightSchedule };
export { Passenger };
export { Booking };
export { BookingInfo };
export { PriceInfo };
export { PaymentInfo };
export { SearchInfo };
export { City };
export { Route };
export { Airport };
export { TravelClass };
