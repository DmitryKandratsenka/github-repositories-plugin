export interface CountryDetails extends CountryBase {
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  languages: CountryLanguage[];
}

export interface CountryBase {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

export interface CountryLanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
  borders: string[];
}

export interface Region {
  name: string;
  value: RegionValue;
}

export type RegionValue = "africa" | "americas" | "asia" | "europe" | "oceania";
