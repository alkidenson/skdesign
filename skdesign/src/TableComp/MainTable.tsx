import React, { useMemo } from 'react';
import Choose from './Choose';
import Datatable from './Datatable';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/store';
import { Data } from '../type';

function MainTable({
  setBig,
  setLess,
  big,
  less,
}: {
  setBig: React.Dispatch<React.SetStateAction<boolean>>;
  setLess: React.Dispatch<React.SetStateAction<boolean>>;
  big: boolean;
  less: boolean;
}) {
  const onHandleNavigationLess = () => {
    setBig(false);
    setLess(true);
  };
  const onHandleNavigationBig = () => {
    setLess(false);
    setBig(true);
  };
  const rawBigData = useSelector((store: RootState) => store.data.data);
  const rawLessData = useSelector((store: RootState) => store.newdata.newdata);
  const bigData: Data[] = useMemo(() => rawBigData, [rawBigData]);
  const lessData: Data[] = useMemo(() => rawLessData, [rawLessData]);
  return (
    <div>
      <div>
        <Choose
          big={big}
          less={less}
          onHandleNavigationLess={onHandleNavigationLess}
          onHandleNavigationBig={onHandleNavigationBig}
        />
      </div>
      <div>{big && <Datatable data={bigData} />}</div>
      <div>{less && <Datatable data={lessData} />}</div>
    </div>
  );
}

export default MainTable;
