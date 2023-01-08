export interface DropdownProps {
  placeholder: string;
  options: OptionProps[];
  onChange: (option: OptionProps) => void;
  selectedOption?: OptionProps;
}

export interface OptionProps {
  label: string;
  value: string;
}
