import {PropsWithChildren} from "react";
import s from './steplayout.module.scss'
import cn from "utils/cn.ts";


interface IStepLayoutProps {
  title: string;
}

const StepLayout = (props: PropsWithChildren<IStepLayoutProps>) => {
  return (
    <div className={s.step_container}>
      <span className={cn(s.h2, `text__400 text__h2`)}>{props.title}</span>
      {props.children}
    </div>
  );
};

export default StepLayout;