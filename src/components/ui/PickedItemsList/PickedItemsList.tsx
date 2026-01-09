import PickedItem from "components/ui/PickedItem/PickedItem.tsx";
import s from './pickedItemsList.module.scss'

interface IPickedItemsListProps {
  items: {id: string, label: string}[];
}

const PickedItemsList = (props: IPickedItemsListProps) => {
  return (
    <div className={s.allergenGrid}>
      {props.items.map((i) => (
        <PickedItem label={i.label} key={i.id}/>
      ))}
    </div>
  );
};

export default PickedItemsList;