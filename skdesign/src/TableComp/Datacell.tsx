import { Data, NullData } from '../type';

function Datacell({ data }: { data: Data |NullData}) {
  return (
    <div>
      <div>{data.id}</div>
      <div>{data.firstName}</div>
      <div>{data.lastName}</div>
      <div>{data.email}</div>
      <div>{data.description}</div>
    </div>
  );
}

export default Datacell;
