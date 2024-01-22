import { useEffect, useState } from 'react';
import './App.css';

import { useAppDispatch } from './redux/reducers/store';
import { Data, DataReducer } from './type';
import MainTable from './TableComp/MainTable';
import formatAddress from './addressFormat';
import { fetchData, fetchLessData } from './redux/api';

function App() {
  const dispatch = useAppDispatch();
  const [big, setBig] = useState(true);
  const [less, setLess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      try {
        const rawdata = await fetchData();
        const mappedDataAddresses: DataReducer[] | Data[] = formatAddress(rawdata);

        dispatch({ type: 'data/load', payload: mappedDataAddresses });

        const lessData = await fetchLessData();
        const mappedLessDataAddresses: Data[] = formatAddress(lessData);

        dispatch({ type: 'lessData/load', payload: mappedLessDataAddresses });
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndDispatch();
  }, []);
if (loading) return <h2>Loading...</h2>
  return (
    <>
      <div>
        <MainTable setBig={setBig} setLess={setLess} big={big} less={less} />
      </div>
    </>
  );
}

export default App;
