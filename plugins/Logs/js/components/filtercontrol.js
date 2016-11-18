import React, { PropTypes } from 'react'

const FilterControl = ({ name, filters, checked, addLogFilters, removeLogFilters}) => {
	const filterControlStyle = {
		width: '100px',
		height: '50px',
		margin: '0',
		padding: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		borderBottom: checked ? '4px solid #00CBA0' : '1px solid #00CBA0',
	}
	const onFilterClick = (clickedFilters) => () => {
		if (checked) {
			removeLogFilters(clickedFilters)
			return
		}
		addLogFilters(clickedFilters)
	}
	return (
		<div style={filterControlStyle} onClick={onFilterClick(filters)}>
			<span style={{WebkitUserSelect: 'none'}}> {name} </span>
		</div>
	)
}

FilterControl.propTypes = {
	name: PropTypes.string.isRequired,
	filters: PropTypes.array.isRequired,
	checked: PropTypes.bool.isRequired,
	addLogFilters: PropTypes.func.isRequired,
	removeLogFilters: PropTypes.func.isRequired,
}

export default FilterControl

