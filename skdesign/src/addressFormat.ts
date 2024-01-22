import { Data, DataReducer } from './type';

const formatAddress = (data: Data[]): DataReducer[] | Data[] => {
  return data.map((i: Data) => {
    if (typeof i.address !== 'string' && typeof i.address !== 'undefined') {
      const { streetAddress, city, state, zip } = i.address;
      return {
        ...i,
        address: `${streetAddress}, ${city}, ${state} ${zip}`,
      };
    }
    return i;
  });
}

export default formatAddress