import {
  IconsCalendar,
  IconsMapMarker,
  IconsSandTime,
} from "../Icons.component";

const SearchFilterBoxComponent = () => {
  return (
    <div className="hotel-search">
      <div className="group">
        <div className="icon">
          <IconsMapMarker />
        </div>
        <input type="text" placeholder="Type a Destination" />
      </div>

      <div className="group">
        <div className="icon">
          <IconsSandTime />
        </div>

        <input type="text" placeholder="Number of days" />
      </div>

      <div className="group">
        <div className="icon">
          <IconsCalendar />
        </div>

        <input type="date" placeholder="Select Month" />
      </div>

      <button>Check Availability</button>
    </div>
  );
};

export default SearchFilterBoxComponent;
