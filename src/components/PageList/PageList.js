import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ELEMENT } from '../../graphql/query';
import PageElement from './PageElement/PageElement';

const PageList = () => {
	const [page, setPage] = useState(0);
	const [elements, setElements] = useState([])
	const PAGE_SIZE = 5;

	const { data, loading, error } = useQuery(GET_ELEMENT, {
		variables: {
			limit: PAGE_SIZE,
			offset: page * PAGE_SIZE
		}
	});

	useEffect(() => {
		if (!loading) {
			setElements(data)
		}
	}, [data])

	const listLaunch = elements.launchesPast?.map(el => <PageElement
		key={el.id}
		elementLaunch={el}
	/>
	);

	return (
		<div>
			<h4>SpaceX Ships</h4>
			<div>
				{
					elements
						? listLaunch
						: <span>Loading...</span>
				}
			</div>
			<div>
				<button
					disabled={!page}
					onClick={() => setPage(prev => prev - 1)}
				>
					&lt;
				</button>
				<span>
					{page + 1}
				</span>
				<button
					onClick={() => setPage(prev => prev + 1)}
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default PageList;