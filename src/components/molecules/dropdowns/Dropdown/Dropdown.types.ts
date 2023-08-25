export interface DropdownProps {
  onChange: (option: Option) => void;
  options: Option[];
  placeholder: string;
  selectedOption?: Option;
}

export interface Option {
  label: string;
  value: string;
}
