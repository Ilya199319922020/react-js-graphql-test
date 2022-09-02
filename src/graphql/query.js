import { gql } from '@apollo/client';

export const GET_ELEMENT = gql`
query {
	station: bikeStation(
	  findBy: { closest: { latitude: 41.402451, longitude: 2.1880918 } }
	) {
	  ...on BikeStation {
		 name
		 coordinates {
			longitude
			latitude
		 }
		 available {
			bikes {
			  electrical
			  mechanical
			}
		 }
	  }
	}
	stations: metroStations(
	  filterBy: { lineId: 4 }
	  first: 3
	) {
	  edges {
		 node {
			id
			name
		 }
	  }
	}
 }
`;