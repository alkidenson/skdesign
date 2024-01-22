import { Data } from "../type";

export type DataState = {
  data: Data[]
} 
export type NewDataState = {
  newdata: Data[]
}


export type Action =
  | { type: 'data/load'; payload: | Data[] }
  | { type: 'newdata/load'; payload: Data[] }
  | { type: 'data/add'; payload: Data }
  | {type: 'lessData/load'; payload: Data[]}
  | { type: 'lessData/add'; payload: Data }






