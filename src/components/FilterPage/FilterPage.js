import React from 'react';

const FilterPage = () => {
	return (
		<div>
			<h5>Фильтры</h5>
			<div>
				<input
					placeholder={'Название'}
					type={'input'}
				/>
			</div>
			<div>
				<input
					placeholder={'Порт'}
					type={'input'}
				/>
				<div>
					<InputCheckbox>
						Port Canavel
					</InputCheckbox>
					<InputCheckbox>
						Port of Los Angeles
					</InputCheckbox>
					<InputCheckbox>
						Fort Lauderdale
					</InputCheckbox>
				</div>
			</div>
		</div>
	);
};

export default FilterPage;



const InputCheckbox = ({ children, active, value, id, onChange }) => {
	return (
		<div

		>
			<input

				type="checkbox"
				checked={value}
				id={id}
				onChange={onChange}
			/>

			<div
			>
				{children}
			</div>

		</div>
	);
};


