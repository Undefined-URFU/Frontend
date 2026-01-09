import s from './pickedItem.module.scss'

interface IPickedItemProps {
  label: string;
  onClose?: () => void;
}

const PickedItem = ({ label, onClose }: IPickedItemProps) => {
  return (
    <div className={s.container} onClick={onClose}>
      <span>{label}</span>
    </div>
  );
};

export default PickedItem;