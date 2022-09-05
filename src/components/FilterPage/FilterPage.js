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
					<Input
						type={'checkbox'}
					>
						Port Canavel
					</Input>
					<Input
						type={'checkbox'}
					>
						Port of Los Angeles
					</Input>
					<Input
						type={'checkbox'}
					>
						Fort Lauderdale
					</Input>
				</div>
			</div>
			<div>
				<span>
					Тип
				</span>
				<div>
					<Input
						type={'radio'}
					>
						Barge
					</Input>
					<Input
						type={'radio'}
					>
						Cargo
					</Input>
					<Input
						type={'radio'}
					>
						High Speed Craft
					</Input>
					<Input
						type={'radio'}
					>
						TugInput


					</Input>
				</div>
			</div>
		</div>
	);
}; 

export default FilterPage;



const Input = ({ children, active, value, id, onChange, type }) => {
	return (
		<div

		>
			<input

				type={type}
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




