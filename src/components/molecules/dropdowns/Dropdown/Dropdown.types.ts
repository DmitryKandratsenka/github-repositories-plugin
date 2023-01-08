export interface DropdownProps {
  placeholder: string;
  options: Option[];
  onChange: (option: Option) => void;
  selectedOption?: Option;
}

export interface Option {
  label: string;
  value: string;
}
