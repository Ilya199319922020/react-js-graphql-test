export const reducer = (state, action) => {
	switch (action.type) {
		case 'getData':
			return {
				...state,
				arrElements: action.data,
			}
		case '1':
						let filterTrue = action.value.valFilter
				.filter((o) => o.launch_site.site_name ==='CCAFS SLC 40')	
			return {
				...state,
				isCanaveral: action.value.isFilter,

				filterElements: action.value.isFilter
					?
					(
						state.filterElements.length
							?
							[...state.filterElements,
							...filterTrue]
							:
							[...filterTrue]
					)
					:
					[...state.filterElements]
						.filter((o) => o.launch_site.site_name !== 'CCAFS SLC 40')
			}
		case '2':
			let filterTru = action.value.valFilter
			.filter((o) => o.launch_site.site_name ==='KSC LC 39A')	
		return {
			...state,
			isCanaveral: action.value.isFilter,

			filterElements: action.value.isFilter
				?
				(
					state.filterElements.length
						?
						[...state.filterElements,
						...filterTru]
						:
						[...filterTru]
				)
				:
				[...state.filterElements]
					.filter((o) => o.launch_site.site_name !== 'KSC LC 39A')
		}
		case '3':
			let filterTr = action.value.valFilter
			.filter((o) => o.launch_site.site_name_long ==='Cape Canaveral Air Force Station Space Launch Complex 40')	
		return {
			...state,
			isCanaveral: action.value.isFilter,

			filterElements: action.value.isFilter
				?
				(
					state.filterElements.length
						?
						[...state.filterElements,
						...filterTr]
						:
						[...filterTr]
				)
				:
				[...state.filterElements]
					.filter((o) => o.launch_site.site_name_long !== 'Cape Canaveral Air Force Station Space Launch Complex 40')
		}
		default: return state
	}
}