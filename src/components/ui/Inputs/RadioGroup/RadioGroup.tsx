import Radio from "components/ui/Inputs/Radio/Radio.tsx";
import s from './radioGroup.module.scss'

interface IOption {
  value: string;
  label: string;
}

interface IRadioGroupProps {
  options: IOption[],
  onCheck: (name: string, value: string, ) => void,
  name: string;
  value: string;
}

const RadioGroup = (props: IRadioGroupProps) => {
  return (
    <div className={s.radioGroup_container}>
      {props.options.map((option: IOption) => {
        const isChecked = props.value === option.value;

        return (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            name={props.name}
            isChecked={isChecked}
            onCheck={props.onCheck}
          />
        )
      })}
    </div>
  );
};

export default RadioGroup;