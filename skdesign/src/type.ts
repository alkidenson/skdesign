import { Column } from 'react-table';

export type Data =
  | {
      id: number | string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address?: Address | string;
      description?: string;
    }| {
      address: string;
      id: string | number;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      description?: string | undefined;
    }
  | {
      address: string;
      id?: undefined;
      firstName?: undefined;
      lastName?: undefined;
      email?: undefined;
      phone?: undefined;
      description?: undefined;
    };

  export type NullData = {
      id?: undefined;
      firstName?: undefined;
      lastName?: undefined;
      email?: undefined;
      phone?: undefined;
      address?: undefined;
      description?: undefined;
    }

    export type DataReducer = {
      id: number | string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: Address | string;
      description?: string;
    }
  
export type Error = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

export type Address = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type CellData = {
  column: Column;
};
