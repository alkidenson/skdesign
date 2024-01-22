import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table';
import { Data, NullData } from '../type';
import Filtering from './Filtering';
import { useState } from 'react';
import Datacell from './Datacell';
import columns from '../columns';
import AddData from './AddData';

function Datatable({ data }: { data: Data[] }) {
  const [datacell, setDatacell] = useState({});
  const [add, setAdd] = useState(false);
  function onHandleAdd() {
    setAdd((prev) => !prev);
  }
  function onHandleCell(dataProp: Data | NullData): any {
    if (dataProp) {
      setDatacell(dataProp);
    }
    if (Object.keys(datacell).length !== 0) {
      setDatacell({});
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable<Data>(
    { columns, data, autoResetHiddenColumns: false, autoResetSortBy: false },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (
    <div className="data_container">
      {!add && (
        <div className="add_data_form_toggle" onClick={onHandleAdd}>
          Добавить данные
        </div>
      )}
      {add && (
        <div className="add_data_form_toggleback" onClick={onHandleAdd}>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="11"
            viewBox="0 0 29 11"
            fill="none"
          >
            <path
              d="M27 9L14.5 2L2 9"
              stroke="#CDC3B1"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
      {add && (
        <div>
          <AddData />
        </div>
      )}
      <div>
        <Filtering filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div>
                    {column.isSorted ? (column.isSortedDesc ? '☝️' : '👇') : ''}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    onClick={() => onHandleCell(cell.row.original)}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        Страница{' '}
        <div>
          {pageIndex + 1} of {pageOptions.length}
        </div>{' '}
      </div>
      <div>
        На страницу:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        ></input>
      </div>
      <div>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>
          Предыдущая
        </button>
      </div>
      <div>
        <button disabled={!canNextPage} onClick={() => nextPage()}>
          Следующая
        </button>
      </div>
      {datacell !== null && (
        <div>
          <Datacell data={datacell} />
        </div>
      )}
    </div>
  );
}

export default Datatable;
