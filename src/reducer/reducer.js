export const reducer = (state, action) => {
	switch (action.type) {
		case 'getData':
			return {
				...state,
				arrElements: action.data,
			}
		case 'filterName':

			return {
				...state,
				filterElements: action.valueFilter
			}
		case 'currentId':
			return {
				...state,
				pageElement: action.value.elements
					.filter(t => t.id === action.value.id)
			}
		case '1':
			let filterTrue = action.value.valFilter
				.filter((o) => o.launch_site.site_name === 'CCAFS SLC 40')
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
				.filter((o) => o.launch_site.site_name === 'KSC LC 39A')
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
				.filter((o) => o.launch_site.site_name_long === 'Cape Canaveral Air Force Station Space Launch Complex 40')
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
		case '4':
			let filterType = action.value.valFilter
				.filter((o) => o.launch_site.site_name_long === 'Vandenberg Air Force Base Space Launch Complex 4E')
			return {
				...state,
				isBarge: action.value.isFilter,
				isCargo: false,
				isCraft: false,
				isTug: false,

				filterElements: filterType
			}
		case '5':
			let filterTyp = action.value.valFilter
				.filter((o) => o.launch_site.site_name_long === 'Kennedy Space Center Historic Launch Complex 39A')
			return {
				...state,
				isBarge: false,
				isCargo: action.value.isFilter,
				isCraft: false,
				isTug: false,

				filterElements: filterTyp
			}

		case '6':
			let filterTy = action.value.valFilter
				.filter((o) => o.launch_site.site_name_long === 'Vandenberg Air Force Base Space Launch Complex 4E'
					&& o.launch_site.site_name === 'KSC LC 39A'
				)
			return {
				...state,
				isBarge: false,
				isCargo: false,
				isCraft: action.value.isFilter,
				isTug: false,

				filterElements: filterTy
			}

		case '7':
			let filterT = action.value.valFilter
				.filter((o) => o.launch_site.site_name_long === 'Cape Canaveral Air Force Station Space Launch Complex 40'
					&& o.launch_site.site_name === 'CCAFS SLC 40'
				)
			return {
				...state,
				isBarge: false,
				isCargo: false,
				isCraft: false,
				isTug: action.value.isFilter,

				filterElements: filterT
			}

		default: return state
	}
}