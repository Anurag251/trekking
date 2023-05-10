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

        <select name="" id="">
          <option value="">Type a Destination</option>
          <option value="">Bhutan</option>
          <option value="">Tibet</option>
          <option value="">India</option>
          <option value="">Thailand</option>
          <option value="">Other</option>
          <option value="">country</option>
        </select>
      </div>

      <div className="group">
        <div className="icon">
          <IconsSandTime />
        </div>
         

        <select name="" id="">
          <option value="">Number of days</option>
          <option value="">5-7 days</option>
          <option value="">7-10 days</option>
          <option value="">10-16 days</option>
          <option value="">16-30 days</option>
        </select>
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
