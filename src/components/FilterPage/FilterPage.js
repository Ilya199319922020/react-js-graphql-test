import React from 'react';
import style from './FilterPage.module.css';

const FilterPage = ({ state, dispatch, arrElements }) => {

	const handler = (e) => {
		const { target } = e
		const isFilter = target.type === 'checkbox' || target.type === 'radio'  ? target.checked : target.value
		console.log(target.value )
		if (arrElements.launchesPast.length) {
			dispatch({
				type: target.id,
				value: {
					isFilter: isFilter,
					valFilter: arrElements.launchesPast
				}
			})
		}

	}

	return (
		<div
			className={style.container}
		>
			<div
				className={style.sidebar}
			>
				<h5
					className={style.sidebar__header}
				>
					Фильтры
				</h5>
				<div
					className={style.sidebar__inputName}
				>
					<input
						className={style.sidebar__inputName_item}
						placeholder={'Название'}
						type={'input'}
					/>
				</div>
				<div
					className={style.sidebar__inputCheckbox}
				>
					<input
						className={style.sidebar__inputCheckbox_item}
						placeholder={'Порт'}
						type={'input'}
					/>
					<div
						className={style.sidebar__inputActive}
					>
						<Input
							id={'1'}
							type={'checkbox'}
							onChange={handler}
							checked={state.isCanaveral}
						>
							Port Canavel
						</Input>
						<Input
							id={'2'}
							type={'checkbox'}
							onChange={handler}
							checked={state.isLosAngeles}
						>
							Port of Los Angeles
						</Input>
						<Input
							id={'3'}
							type={'checkbox'}
							onChange={handler}
							checked={state.isLauderdale}
						>
							Fort Lauderdale
						</Input>
					</div>
				</div>
				<div
					className={style.sidebar__inputRadio}
				>
					<span
						className={style.sidebar__inputRadio_text}
					>
						Тип
					</span>
					<div
						className={style.sidebar__inputRadio_element}
					>
						<Input
							id={'4'}
							type={'radio'}
							onChange={handler}
							checked={state.isBarge}
						>
							Barge
						</Input>
						<Input
							id={'5'}
							type={'radio'}
							onChange={handler}
							checked={state.isCargo}
						>
							Cargo
						</Input>
						<Input
							id={'6'}
							type={'radio'}
							onChange={handler}
							checked={state.isCraft}
						>
							High Speed Craft
						</Input>
						<Input
							id={'7'}
							type={'radio'}
							onChange={handler}
							checked={state.isTug}
						>
							TugInput
						</Input>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterPage;

const Input = ({ children, checked,  id, onChange, type }) => {
	return (
		<div
			className={style.input}
		>
			<input
				className={style.input__item}
				type={type}
				checked={checked}
				id={id}
				onChange={onChange}
			/>
			<div
				className={style.input__text}
			>
				{
					children
				}
			</div>
		</div>
	);
};




