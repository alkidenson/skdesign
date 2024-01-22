import { Data } from '../type';

export const fetchData = async (): Promise<Data[]> => {
  const res = await (
    await fetch(
      'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    )
  ).json();
  return res;
};

export const fetchLessData = async (): Promise<Data[]> => {
  const res = await (
    await fetch(
      'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    )
  ).json();
  return res;
};

export const fetchAddedData = async (): Promise<Data[]> => {
  const res = await (await fetch('http://localhost:3000/data')).json();
  return res;
};

export const addData = async (data: Data): Promise<Data> => {
  const res = await fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const addLessData = async (data: Data): Promise<Data> => {
  const res = await fetch('http://localhost:3000/newdata', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
