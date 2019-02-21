import { History } from 'history';

type Stringify = (query: any) => string;
type Parse = (query: string) => any;
declare const historyWithQuery: (history: History, stringify: Stringify, parse: Parse) => History;

declare module 'history' {
  interface Location {
    query: { [key: string]: string };
  }
}

export default historyWithQuery;
