import React from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const SearchBar = () => {
	return (
		<div className="form-group vh-100 d-flex align-items-center m-0">
			<label htmlFor="search" className="d-flex">Where would you like to hike?</label>
			<div class="container d-flex">
				<input className="form-control mr-2" name="search" />
				<SubmitBtn/>
			</div>
		</div>
	);
};

export default SearchBar;
