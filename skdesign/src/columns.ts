import { Column } from "react-table";
import { Data } from "./type";

export const columns: Column<Data>[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Имя',
    accessor: 'firstName',
  },
  {
    Header: 'Фамилия',
    accessor: 'lastName',
  },
  {
    Header: 'E-mail',
    accessor: 'email',
  },
  {
    Header: 'Телефон',
    accessor: 'phone',
  },
  {
    Header: 'Адрес',
    accessor: 'address',
  },
  {
    Header: 'Описание',
    accessor: 'description',
  },
];

export default columns