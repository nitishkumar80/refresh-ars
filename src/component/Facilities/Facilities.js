import React, { useState } from "react";
import "./Facilities.css"; // Import the CSS file

const Facilities = () => {
  // Sample data for facilities
  const facilitiesData = [
    {
      campus: "Lalpur",
      sport: "Cricket",
      description:
        "Class 1 cricket ground with a well-maintained pitch and outfield, ideal for professional training and tournaments.",
      type: "pitch",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355731938/AK/GE/CL/135199294/box-cricket-setup.jpg",
    },
    {
      campus: "Lalpur",
      sport: "Football",
      description:
        "Full-sized football field with natural grass and FIFA-standard goalposts, available for college teams and sports enthusiasts.",
      type: "field",
      image: "https://en.reformsports.com/oxegrebi/2020/09/mini-futbol-sahasi-ozellikleri-ve-olculeri.jpg",
    },
    {
      campus: "Daladli",
      sport: "Swimming",
      description:
        "Olympic-sized swimming pool with professional training facilities, including temperature control and safety measures.",
      type: "pool",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/EM/HZ/JH/2802470/swimming-pool-construction-500x500.jpg",
    },
    {
      campus: "Lalpur",
      sport: "Badminton",
      description:
        "Indoor wooden badminton courts with proper lighting and ventilation, suitable for both recreational and professional training.",
      type: "court",
      image: "https://5.imimg.com/data5/LZ/IH/MZ/SELLER-5063162/outdoor-badminton-court-500x500.jpg",
    },
    {
      campus: "Daladli",
      sport: "Yoga",
      description:
        "Peaceful yoga studio with expert trainers, offering daily sessions for meditation, flexibility, and mindfulness.",
      type: "studio",
      image: "path/to/yoga.jpg",
    },
    {
      campus: "Lalpur",
      sport: "Gym",
      description:
        "State-of-the-art gym with modern fitness equipment, personal training, and strength conditioning facilities.",
      type: "fitness",
      image: "path/to/gym.jpg",
    },
  ];

  // State for filter selections
  const [selectedCampuses, setSelectedCampuses] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [selectedCourseTypes, setSelectedCourseTypes] = useState([]);

  // State for applied filters
  const [appliedFilters, setAppliedFilters] = useState({
    campuses: [],
    sports: [],
    types: [],
  });

  // Handle filter changes
  const handleCampusChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedCampuses(options);
  };

  const handleSportChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedSports(options);
  };

  const handleCourseTypeChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedCourseTypes(options);
  };

  // Apply selected filters
  const applyFilters = () => {
    setAppliedFilters({
      campuses: selectedCampuses,
      sports: selectedSports,
      types: selectedCourseTypes,
    });
    console.log("Applied Filters:", { campuses: selectedCampuses, sports: selectedSports, types: selectedCourseTypes });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCampuses([]);
    setSelectedSports([]);
    setSelectedCourseTypes([]);
    setAppliedFilters({ campuses: [], sports: [], types: [] });
  };

  // Filter facilities based on applied filters
  const filteredFacilities = facilitiesData.filter((facility) => {
    const campusMatch =
      appliedFilters.campuses.length === 0 || appliedFilters.campuses.includes(facility.campus);
    const sportMatch =
      appliedFilters.sports.length === 0 || appliedFilters.sports.includes(facility.sport);
    const typeMatch =
      appliedFilters.types.length === 0 || appliedFilters.types.includes(facility.type);
    return campusMatch && sportMatch && typeMatch;
  });

  return (
    <div className="facilities-container">
      <div className="listing-title-flex">
        <h2 className="redf38marcellus">Facilities</h2>
      </div>
      <div className="svvlisting-wrapper">
        <div className="svvlisting-col svvlisting-filter-col">
          <div className="filterPopup">
            <div className="svv-filter svv-filter-theme1">
              <form className="svv-form">
                <div className="svv-filterwrapper">
                  <div className="svv-filter-head">
                    <h4 className="filtertitle darkf20firamd">Refine Your Search</h4>
                  </div>
                  <div className="svv-filter-body">
                    <div className="formrow">
                      {/* Campus Filter */}
                      <div className="formgroup w100">
                        <label className="form-label darkf14firamd">By Campus</label>
                        <div className="forminput select2Input-css">
                          <select
                            className="select2Input"
                            multiple
                            size="3"
                            onChange={handleCampusChange}
                            value={selectedCampuses}
                          >
                            <option value="Daladli">Daladli</option>
                            <option value="Lalpur">Lalpur</option>
                          </select>
                        </div>
                      </div>

                      {/* Sport Filter */}
                      <div className="formgroup w100">
                        <label className="form-label darkf14firamd">By Sports</label>
                        <div className="forminput select2Input-css">
                          <select
                            className="select2Input"
                            multiple
                            size="5"
                            onChange={handleSportChange}
                            value={selectedSports}
                          >
                            <option value="Cricket">Cricket</option>
                            <option value="Football">Football</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Gym">Gym</option>
                          </select>
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="formgroup w100">
                        <label className="form-label darkf14firamd">By Facility Type</label>
                        <div className="forminput select2Input-css">
                          <select
                            className="select2Input"
                            multiple
                            size="3"
                            onChange={handleCourseTypeChange}
                            value={selectedCourseTypes}
                          >
                            <option value="pool">Pool</option>
                            <option value="court">Court</option>
                            <option value="pitch">Pitch</option>
                            <option value="studio">Studio</option>
                            <option value="fitness">Fitness</option>
                            <option value="field">Field</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="svv-filter-footer">
                    <button type="button" className="svv-btn" onClick={clearFilters}>
                      Clear Filters
                    </button>
                    <button type="button" className="svv-btn svv-redbtn" onClick={applyFilters}>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Facilities Listing */}
        <div className="svvlisting-col svvlisting-filtercontent-col">
          <div className="svvlistingfiltercontentwrap">
            <div className="facilitieslists">
              {filteredFacilities.length === 0 ? (
                <p className="errormsg">There are no facilities matching the filter.</p>
              ) : (
                filteredFacilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <div>
                      <h3>{facility.sport}</h3>
                      <p>{facility.description}</p>
                      <p><strong>Campus:</strong> {facility.campus}</p>
                    </div>
                    <img src={facility.image} alt={facility.sport} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
