import s from './radio.module.scss'
import cn from "utils/cn.ts";
import {ChangeEvent} from "react";

interface IRadioProps {
  name: string;
  value: string;
  onCheck: (name: string, val: string,) => void;
  label: string;
  isChecked: boolean;
}

const Radio = (props: IRadioProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onCheck(props.name, e.target.value,)
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <label className={s.radio}>
        <input
          className={s.input}
          checked={props.isChecked}
          type="radio"
          onChange={handleChange}
          value={props.value}
          name={props.name}
        />
        <span className={cn(s.span, 'text__regular', 'text__300')}>{props.label}</span>
      </label>
    </div>
  );
};

export default Radio;