import { gql } from '@apollo/client';

export const GET_ELEMENT = gql`
query GetLaunches($limit: Int!, $offset: Int!) {
	launchesPast(limit: $limit, offset: $offset) {
	  id
	  mission_name
	  launch_date_local
	  launch_site {
		 site_name_long
	  }
	  links {
		 article_link
		 video_link
		 mission_patch
	  }
	  rocket {
		 rocket_name
	  }
	}
 }
`;