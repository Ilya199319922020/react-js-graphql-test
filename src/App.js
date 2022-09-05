import { useQuery } from '@apollo/client';
import './App.css';
import FilterPage from './components/FilterPage/FilterPage';
import PageList from './components/PageList/PageList';
import { GET_ELEMENT } from './graphql/query';

function App() {
  const { data, loading, error } = useQuery(GET_ELEMENT);

 console.log(data)

  return (
    <div
      className={'wpapper'}
    >
      <PageList />
      <FilterPage />
    </div>
  );
}

export default App;
