/* eslint-disable react/prop-types */
import { useState } from "react";

const PackageDescriptionListComponent = ({ selectedPackage }) => {
  const [itinerarytoggle, setItineraryToggle] = useState("itineraryToggle1");
  const [toggle, setToggle] = useState("toggle1");

  return (
    <div className="package-description-list">
      <div className="list">
        <div className={`item ${toggle === "toggle1" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle1")}>
            <h4>Overview</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <div className="content-title">HIGHLIGHTS</div>

            <ul>
              <li>Visit the Museum of Modern Art in Manhattan</li>
              <li>
                See amazing works of contemporary art, including Vincent van
                Gogh's The Starry Night
              </li>
              <li>
                Check out Campbell's Soup Cans by Warhol and The Dance (I) by
                Matisse
              </li>
              <li>
                Behold masterpieces by Gauguin, Dali, Picasso, and Pollock
              </li>
              <li>
                Enjoy free audio guides available in English, French, German,
                Italian, Spanish, Portuguese
              </li>
            </ul>
          </div>
        </div>

        {selectedPackage && selectedPackage.itenarydetails !== null ? (
          <div className={`item ${toggle === "toggle2" ? "active" : ""}`}>
            <div className="title" onClick={() => setToggle("toggle2")}>
              <h4>Itinerary</h4>
              <i className="fas fa-angle-down arrow-rotate"></i>
            </div>
            <div className="inner-content">
              <ul className="faq">
                {selectedPackage.itenarydetails.map((data, idx) => (
                  <li
                    key={idx}
                    className={`${itinerarytoggle === data.id ? "active" : ""}`}
                  >
                    <div
                      className="title"
                      onClick={() => setItineraryToggle(data.id)}
                    >
                      Day {data.day}: {data.trip_title} [{data.altitude}],{" "}
                      {data.activities}
                      <i className="fas fa-angle-down"></i>
                    </div>

                    <p className="desc">{data.trip_details}</p>
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
            <ul>
              <li>Return Ticket Ex Delhi in Economy Class</li>
              <li>Accommodation on sharing basis as per package selected.</li>
              <li>All Meals (07 Breakfast + 07 Lunch + 7 Dinner)</li>
              <li>
                To & Fro Ex Leh Airport Transfers (For Ex Leh Packages only)
              </li>
              <li>
                Transport by Non A/C 12 Seater Force Tempo Traveller with 10
                person in a vehicle.
              </li>
              <li>
                01 Oxygen Cylinder in each vehicle for visit to Nubra / Pangong
                Lake / Tsomoriri Lake.
              </li>
              <li>Ladakh Entry Fees & Wild Life Fees.</li>
              <li>Professional Lady tour guide.</li>
              <li>Monument & Museum Entry Fees.</li>
              <li>
                Daily 02 packaged water bottle (1 litre each) for journey only.
              </li>
              <li>Camel Safari once during stay in Nubra Valley.</li>
              <li>Ladakhi Cultural Prograame once during stay in Leh.</li>
              <li> Complimentary Ladakh Basic guide book on arrival in Leh.</li>
              <li>GST included.</li>
            </ul>
          </div>
        </div>

        <div className={`item ${toggle === "toggle6" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle6")}>
            <h4>Exclusions</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul>
              <li>
                Any Kind of Personal Expenses or Optional Tours / Extra Meals
                Ordered
              </li>
              <li>
                Anything not specifically mentioned under the head “Prices
                included”.
              </li>
              <li>Tips, Insurance, Laundry, Phone Calls.</li>
              <li>Any Kind of Drinks (Alcoholic, Mineral, Aerated)</li>
              <li>
                Cost incidental to any change in the itinerary/ stay on account
                of flight cancellation due to bad weather, ill health,
                roadblocks and/or any factors beyond control.
              </li>
            </ul>
          </div>
        </div>

        <div className={`item ${toggle === "toggle7" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle7")}>
            <h4>Cancellation Policy</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul>
              <li>
                10% cancellation charges if cancelled before 30 days before the
                tour.
              </li>
              <li>
                25% cancellation charges if cancelled between 30 – 20 Days
                before the tour.
              </li>
              <li>
                50% cancellation charges if cancelled between 19 – 10 Days
                before the tour.
              </li>
              <li>No refund if cancelled before 10 days of trip start.</li>
              <li>No Refund or Compensation on any changes on ongoing trip.</li>
              <li>
                Any changes done on trip, applicable charges will be charged.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className={`item ${toggle === "toggle8" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle8")}>
            <h4>Supplementary Other Charges</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul>
              <li>
                Cultural Program Rs. 11,000 per program (Approx. 60 – 70 Mins)
                at respective hotel in Leh.
              </li>
              <li>
                River Rafting (Transfer, Rafting & Lunch) INR 2500 Per Person –
                Chilling – Nimoo (Zangskar River)
              </li>
              <li>Professional Tourist Guide Rs. 3000/- Per Day (Ex Leh)</li>
              <li>Oxygen Cylinder INR 700 per day (Ex Leh)</li>
            </ul>
          </div>
        </div>

        <div className={`item ${toggle === "toggle9" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle9")}>
            <h4>Innerline Permit</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul>
              <li>
                Clients require Innerline permits to visit the restricted areas
                like Pangong Lake & Khardongla pass.
              </li>
              <li>
                Permits will be arranged by us from the District magistrate’s
                office for which we require the original photo ID proof
                (passport, driving license or Election ID).
              </li>
              <li>
                The permit costs include Red Cross society, Wildlife fee and
                Environmental fee.
              </li>
              <li>
                The District Magistrate office Leh is not authorized to issue
                permits to the nationalities of Bangladesh, Myanmar, Sri Lanka,
                Pakistan, People’s Republic of China, Taiwan, Afghanistan and
                people holding Diplomatic and official passport and visa. These
                Nationalities and Diplomatic/ Official passport holders can
                issued permits only after they gain authorization from the
                Ministry of Home Affairs, New Delhi.
              </li>
            </ul>
          </div>
        </div>

        <div className={`item ${toggle === "toggle10" ? "active" : ""}`}>
          <div className="title" onClick={() => setToggle("toggle10")}>
            <h4>Child Policy</h4>
            <i className="fas fa-angle-down arrow-rotate"></i>
          </div>
          <div className="inner-content">
            <ul>
              <li>Child of 5 years and below will be complimentary.</li>
              <li>
                Child above 8 years of Age it will be considered as Extra Bed.
              </li>
            </ul>
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
            <div className="content-title">FREQUENTYLY ASKED QUESTIONS</div>

            <ul>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDescriptionListComponent;
