export interface DropdownProps<Value extends string> {
  onChange: (option: Option<Value>) => void;
  options: Option<Value>[];
  placeholder: string;
  selectedOption?: Option<Value>;
}

export interface Option<Value extends string> {
  label: string;
  value: Value;
}

export type FilterOptionValue = 'all' | 'favourites';
