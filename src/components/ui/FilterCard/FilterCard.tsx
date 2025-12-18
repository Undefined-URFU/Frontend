import s from './filterCard.module.scss'
import cn from "utils/cn.ts";
interface IFilterCardProps {
  label: string;
}

const FilterCard = (props: IFilterCardProps) => {
  return (
    <div className={s.container} >
      <span className={cn('text__regular text__400')}>{props.label}</span>
    </div>
  );
};

export default FilterCard;