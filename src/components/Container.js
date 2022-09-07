import React, { useEffect, useReducer, useState } from 'react';
import FilterPage from './FilterPage/FilterPage';
import PageList from './PageList/PageList';
import style from './Container.module.css';
import { useQuery } from '@apollo/client';
import { GET_ELEMENT } from '../graphql/query';
import { reducer } from '../reducer/reducer';

const Container = () => {
	const [page, setPage] = useState(0);
	const [state, dispatch] = useReducer(reducer, {
		arrElements: [],
		filterElements: [],
		pageElement: [],
		isCanaveral: false,
		isLosAngeles: false,
		isLauderdale: false,
		isBarge: false,
		isCargo: false,
		isCraft: false,
		isTug: false,
	});

	const PAGE_SIZE = 5;

	const { data, loading, error } = useQuery(GET_ELEMENT, {
		variables: {
			limit: PAGE_SIZE,
			offset: page * PAGE_SIZE
		}
	});

	useEffect(() => {
		if (!loading) {
			dispatch({ type: 'getData', data: data })
		}
	}, [data]);

	return (
		<div
			className={style.wpapper}
		>
			<PageList
				elements={
					state.filterElements.length > 0
						? state.filterElements
						: state.arrElements.launchesPast
				}
				dispatch={dispatch}
				pageElement={state.pageElement}
				setPage={setPage}
				page={page}
			/>
			<FilterPage
				state={state}
				arrElements={state.arrElements}
				dispatch={dispatch}
			/>
		</div>
	);
};

export default Container;