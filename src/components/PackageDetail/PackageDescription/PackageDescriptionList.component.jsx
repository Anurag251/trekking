/* eslint-disable react/prop-types */
import { useState } from "react";

const PackageDescriptionListComponent = ({ selectedPackage }) => {
  const [toggle, setToggle] = useState("toggle0");
  const [itinerary, setItinerary] = useState("");

  console.log(selectedPackage && selectedPackage.itenarydetails)

  return (
    <div className="package-description-list">
      <div className="list">
        <div className={`item ${toggle === "toggle0" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle0")}>
            <h4>Overview</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.content,
              }}
            />
          </div>
        </div>

        <div className={`item active`}>
          <div className="title">
            <h4>Highlight</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.highlight,
              }}
            />
          </div>
        </div>

        {selectedPackage && selectedPackage.itenarydetails !== null ? (
          <div className={`item active`}>
            <div className="title" onClick={() => setToggle("toggle2")}>
              <h4>Itinerary</h4>
              <i className="fas fa-angle-down arrow-rotate"></i>
            </div>
            <div className="inner-content">
              <ul className="faq">
                {selectedPackage.itenarydetails.map((data, idx) => (
                  <li key={idx} className={`${data.trip_title.split(':')[0] === itinerary ? "active" : ""}`} onClick={() => setItinerary(data.trip_title.split(':')[0])}>
                    <div className="title">
                      {data.day} {data.trip_title}
                    </div>

                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: data && data.trip_details,
                      }}
                    />
                  </li>
                ))}

                {/* <li
                  className={`${
                    itinerarytoggle === "itineraryToggle2" ? "active" : ""
                  }`}
                >
                  <div
                    className="title"
                    onClick={() => setItineraryToggle("itineraryToggle2")}
                  >
                    Day 2: Full day Guided Sightseeing tour in Kathmandu-A
                    UNESCO World Heritage Site.
                    <i className="fas fa-angle-down"></i>
                  </div>

                  <p className="desc">
                    Today, upon arrival from your respective countries, our
                    representative will transfer you to the hotel from the
                    airport. The rest of the day will be spent in the hotel
                    itself. You can either relish the unique and delicious
                    Nepali cuisine that Nepal is famous for or decide to stroll
                    around the streets of your hotel. Breathe in the ambience of
                    Kathmandu as much as you can. There will also be a full trek
                    briefing on this evening.
                    <br />
                    <br />
                    Overnight at Hotel in Kathmandu.
                    <br /> Meals not included.
                  </p>
                </li>

                <li
                  className={`${
                    itinerarytoggle === "itineraryToggle3" ? "active" : ""
                  }`}
                >
                  <div
                    className="title"
                    onClick={() => setItineraryToggle("itineraryToggle3")}
                  >
                    Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to
                    Hotel
                    <i className="fas fa-angle-down"></i>
                  </div>

                  <p className="desc">
                    Today, upon arrival from your respective countries, our
                    representative will transfer you to the hotel from the
                    airport. The rest of the day will be spent in the hotel
                    itself. You can either relish the unique and delicious
                    Nepali cuisine that Nepal is famous for or decide to stroll
                    around the streets of your hotel. Breathe in the ambience of
                    Kathmandu as much as you can. There will also be a full trek
                    briefing on this evening.
                    <br />
                    <br />
                    Overnight at Hotel in Kathmandu.
                    <br /> Meals not included.
                  </p>
                </li>

                <li
                  className={`${
                    itinerarytoggle === "itineraryToggle4" ? "active" : ""
                  }`}
                >
                  <div
                    className="title"
                    onClick={() => setItineraryToggle("itineraryToggle4")}
                  >
                    Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to
                    Hotel
                    <i className="fas fa-angle-down"></i>
                  </div>

                  <p className="desc">
                    Today, upon arrival from your respective countries, our
                    representative will transfer you to the hotel from the
                    airport. The rest of the day will be spent in the hotel
                    itself. You can either relish the unique and delicious
                    Nepali cuisine that Nepal is famous for or decide to stroll
                    around the streets of your hotel. Breathe in the ambience of
                    Kathmandu as much as you can. There will also be a full trek
                    briefing on this evening.
                    <br />
                    <br />
                    Overnight at Hotel in Kathmandu.
                    <br /> Meals not included.
                  </p>
                </li>

                <li
                  className={`${
                    itinerarytoggle === "itineraryToggle5" ? "active" : ""
                  }`}
                >
                  <div
                    className="title"
                    onClick={() => setItineraryToggle("itineraryToggle5")}
                  >
                    Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to
                    Hotel
                    <i className="fas fa-angle-down"></i>
                  </div>

                  <p className="desc">
                    Today, upon arrival from your respective countries, our
                    representative will transfer you to the hotel from the
                    airport. The rest of the day will be spent in the hotel
                    itself. You can either relish the unique and delicious
                    Nepali cuisine that Nepal is famous for or decide to stroll
                    around the streets of your hotel. Breathe in the ambience of
                    Kathmandu as much as you can. There will also be a full trek
                    briefing on this evening.
                    <br />
                    <br />
                    Overnight at Hotel in Kathmandu.
                    <br /> Meals not included.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        ) : null}
        {/*  <div className={`item ${toggle === "toggle2" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle2")}>
            <h4>Itinerary</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul className="faq">
              <li
                className={`${
                  itinerarytoggle === "itineraryToggle1" ? "active" : ""
                }`}
              >
                <div
                  className="title"
                  onClick={() => setItineraryToggle("itineraryToggle1")}
                >
                  Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to Hotel
                  <i className="fas fa-angle-down"></i>
                </div>

                <p className="desc">
                  Today, upon arrival from your respective countries, our
                  representative will transfer you to the hotel from the
                  airport. The rest of the day will be spent in the hotel
                  itself. You can either relish the unique and delicious Nepali
                  cuisine that Nepal is famous for or decide to stroll around
                  the streets of your hotel. Breathe in the ambience of
                  Kathmandu as much as you can. There will also be a full trek
                  briefing on this evening.
                  <br />
                  <br />
                  Overnight at Hotel in Kathmandu.
                  <br /> Meals not included.
                </p>
              </li>

              <li
                className={`${
                  itinerarytoggle === "itineraryToggle2" ? "active" : ""
                }`}
              >
                <div
                  className="title"
                  onClick={() => setItineraryToggle("itineraryToggle2")}
                >
                  Day 2: Full day Guided Sightseeing tour in Kathmandu-A UNESCO
                  World Heritage Site.
                  <i className="fas fa-angle-down"></i>
                </div>

                <p className="desc">
                  Today, upon arrival from your respective countries, our
                  representative will transfer you to the hotel from the
                  airport. The rest of the day will be spent in the hotel
                  itself. You can either relish the unique and delicious Nepali
                  cuisine that Nepal is famous for or decide to stroll around
                  the streets of your hotel. Breathe in the ambience of
                  Kathmandu as much as you can. There will also be a full trek
                  briefing on this evening.
                  <br />
                  <br />
                  Overnight at Hotel in Kathmandu.
                  <br /> Meals not included.
                </p>
              </li>

              <li
                className={`${
                  itinerarytoggle === "itineraryToggle3" ? "active" : ""
                }`}
              >
                <div
                  className="title"
                  onClick={() => setItineraryToggle("itineraryToggle3")}
                >
                  Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to Hotel
                  <i className="fas fa-angle-down"></i>
                </div>

                <p className="desc">
                  Today, upon arrival from your respective countries, our
                  representative will transfer you to the hotel from the
                  airport. The rest of the day will be spent in the hotel
                  itself. You can either relish the unique and delicious Nepali
                  cuisine that Nepal is famous for or decide to stroll around
                  the streets of your hotel. Breathe in the ambience of
                  Kathmandu as much as you can. There will also be a full trek
                  briefing on this evening.
                  <br />
                  <br />
                  Overnight at Hotel in Kathmandu.
                  <br /> Meals not included.
                </p>
              </li>

              <li
                className={`${
                  itinerarytoggle === "itineraryToggle4" ? "active" : ""
                }`}
              >
                <div
                  className="title"
                  onClick={() => setItineraryToggle("itineraryToggle4")}
                >
                  Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to Hotel
                  <i className="fas fa-angle-down"></i>
                </div>

                <p className="desc">
                  Today, upon arrival from your respective countries, our
                  representative will transfer you to the hotel from the
                  airport. The rest of the day will be spent in the hotel
                  itself. You can either relish the unique and delicious Nepali
                  cuisine that Nepal is famous for or decide to stroll around
                  the streets of your hotel. Breathe in the ambience of
                  Kathmandu as much as you can. There will also be a full trek
                  briefing on this evening.
                  <br />
                  <br />
                  Overnight at Hotel in Kathmandu.
                  <br /> Meals not included.
                </p>
              </li>

              <li
                className={`${
                  itinerarytoggle === "itineraryToggle5" ? "active" : ""
                }`}
              >
                <div
                  className="title"
                  onClick={() => setItineraryToggle("itineraryToggle5")}
                >
                  Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer to Hotel
                  <i className="fas fa-angle-down"></i>
                </div>

                <p className="desc">
                  Today, upon arrival from your respective countries, our
                  representative will transfer you to the hotel from the
                  airport. The rest of the day will be spent in the hotel
                  itself. You can either relish the unique and delicious Nepali
                  cuisine that Nepal is famous for or decide to stroll around
                  the streets of your hotel. Breathe in the ambience of
                  Kathmandu as much as you can. There will also be a full trek
                  briefing on this evening.
                  <br />
                  <br />
                  Overnight at Hotel in Kathmandu.
                  <br /> Meals not included.
                </p>
              </li>
            </ul>
          </div>
        </div> */}

        <div className={`item ${toggle === "toggle5" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle5")}>
            <h4>Inclusions</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.include,
              }}
            />
          </div>
        </div>

        <div className={`item ${toggle === "toggle6" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle6")}>
            <h4>Exclusions</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.exclude,
              }}
            />
          </div>
        </div>

        <div className={`item ${toggle === "toggle7" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle7")}>
            <h4>Cancellation Policy</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.cancel,
              }}
            />
          </div>
        </div>

        <div className={`item ${toggle === "toggle8" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle8")}>
            <h4>Supplementary Other Charges</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.charges,
              }}
            />
          </div>
        </div>

        <div className={`item ${toggle === "toggle9" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle9")}>
            <h4>Innerline Permit</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.permit,
              }}
            />
          </div>
        </div>

        <div className={`item ${toggle === "toggle10" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle10")}>
            <h4>Child Policy</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.child,
              }}
            />
          </div>
        </div>

        {selectedPackage && selectedPackage.faq !== null ? (
          <div className={`item ${toggle === "toggle3" ? "active" : ""}`}>
            <div className="title" onClick={() => setToggle("toggle3")}>
              <h4>FAQs</h4>
              <i className="fas fa-angle-down arrow-rotate"></i>
            </div>
            <div className="inner-content">
              <div className="content-title">FREQUENTYLY ASKED QUESTIONS</div>

              <ul>
                {selectedPackage.faq.map((data, idx) => (
                  <li key={idx}> {data.faq_title}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        <div className={`item ${toggle === "toggle4" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle4")}>
            <h4>Terms & Condition</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedPackage && selectedPackage.terms,
              }}
            />
            {/* <ul>
              <li>
                Please ask your bank to advise payment to either Bank by
                authenticated Tested Telex message. Use one of the banks above
                with correct company address.
              </li>
              <li>
                Whether you transfer money to Himalayan Bank under Mountain Go
                Trekking & Expedition Pvt. Ltd.
              </li>
              <li>
                Bank service charge should be borne by the clients themselves at
                the time of deposit.
              </li>
              <li>4. Flight: Flight bookings are 10% non-refundable.</li>
            </ul>

            <div className="content-title">
              IMPORTANT NOTE FOR TOURS AND TREKKING GROUPS:
            </div>

            <ul>
              <li>30% payment should be transfer by bank after trip confirm</li>
              <li>100% payment to be deposited before the trip starts</li>
              <li>
                All trip prices valid from 01 January 2023 to 31 March 2024.
              </li>
              <li>
                25% cancellation charges if the trekking is canceled within 45
                days before the tour.
              </li>
              <li>
                35% cancellation charges if the tour and trek are canceled
                within one week before the tour.
              </li>
              <li>
                No refund if the trek or tour is canceled after starting or
                middle of the trek.
              </li>{" "}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDescriptionListComponent;
