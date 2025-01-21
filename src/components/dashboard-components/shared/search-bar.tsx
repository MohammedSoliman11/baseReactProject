// import React from "react";
import "../../../styles/dashboard-styles/shared/top-bar.css";
import KSAFlag from "../../../assets/image.png";

const TopBar = () => {
  return (
    <div className='col shadow p-3 d-flex justify-content-between'>
      {/* Search Bar */}
      <div className='d-flex justify-content-start align-items-center gap-2 w-75 sm-w-100'>
        <div className='w-75'>
          <form className='search-form'>
            <button type='submit' className='search-button bg-light'>
              <i className='bi bi-search'></i>
            </button>
            <input
              type='text'
              className='form-control search-input'
              placeholder='هل تبحث عن شيء؟'
            />
          </form>
        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center gap-2 w-25 sm-w-100'>
        {/* Icons Section */}
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-bell-fill secondary-color'></i>
            </button>
          </div>
          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-envelope-fill text-primary'></i>
            </button>
          </div>

          <div className=''>
            <button className='btn btn-light p-2'>
              <i className='bi bi-person-fill text-success'></i>
            </button>
          </div>
        </div>
        {/* Language Selector */}
        <div className=''>
          <button
            className='btn btn-light dropdown-toggle'
            type='button'
            id='languageDropdown'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <img
              src={KSAFlag} // Replace with the flag icon
              alt='Arabic'
              className='me-2'
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                margin: "10px",
              }}
            />
            العربية
          </button>
          <ul className='dropdown-menu' aria-labelledby='languageDropdown'>
            <li>
              <a className='dropdown-item' href='#arabic'>
                العربية
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#english'>
                English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
