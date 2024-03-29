import {ILang} from '../assets/lang/lang';

export interface IState {
  loader: boolean;
  navMenu: boolean;
  dateSearchBtn: boolean;
  languages: ILanguages[];
  locale: any;
  user: IUser | null;
}


export interface ILanguages {
    id: number;
    key: ILang;
    value: string;
}
