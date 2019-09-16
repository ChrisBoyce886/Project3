import React from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const SearchBar = () => {
	return (
		<div className="form-group border">
			<label htmlFor="search">Where would you like to hike?</label>
			<div class="container d-flex">
				<input className="form-control mr-2" name="search" />
				<SubmitBtn/>
			</div>
		</div>
	);
};

export default SearchBar;
