export interface CountryDetails extends CountryBase {
  borders: string[];
  currencies: Currency[];
  languages: CountryLanguage[];
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
}

export interface Currency {
  name: string;
}

export interface CountryBase {
  alpha3Code: string;
  capital: string;
  flag: string;
  name: string;
  population: number;
  region: string;
}

export interface CountryLanguage {
  borders: string[];
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Region {
  name: string;
  value: RegionValue;
}

export type RegionValue = "africa" | "americas" | "asia" | "europe" | "oceania";
