import cn from "utils/cn.ts";
import s from './progressBar.module.scss'

interface IProgressBarProps{
  stepsCount: number;
  currentStep: number;
}

const ProgressBar = (props: IProgressBarProps) => {
  const { stepsCount, currentStep } = props;

  return (
    <div className={s.progress_bar}>
      {Array.from({ length: stepsCount }).map((_, i) => {
        const stepNumber = i + 1;
        const isCurrent = stepNumber === currentStep;

        return (
          <div
            key={i}
            className={cn(s.step, isCurrent && s.current_step)}
          ></div>
        )
      })}
    </div>
  );
};

export default ProgressBar;