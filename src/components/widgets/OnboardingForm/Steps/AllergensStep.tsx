import { Select, Space } from 'antd';
import { useContext } from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";
import PickedItem from "components/ui/PickedItem/PickedItem.tsx";

import { allergenOptions, ingredientTranslations } from "constants/allergens.ts";

const AllergensStep = () => {
  const { values, onChange } = useContext(onboardingContext);
  const selectedValues = values.allergens || [];

  const handleChange = (newValues: string[]) => {
    onChange('allergens', newValues);
  };

  const handleRemove = (itemToRemove: string) => {
    const updated = selectedValues.filter(item => item !== itemToRemove);
    onChange('allergens', updated);
  };

  return (
    <div>
      <Select
        className='selectInput'
        mode="multiple"
        showSearch
        allowClear
        value={selectedValues}
        style={{ width: '100%' }}
        placeholder="Аллерген"
        options={allergenOptions}
        onChange={handleChange}
        tagRender={() => <></>}
        maxTagCount={0}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />

      <div style={{ marginTop: 16 }}>
        <Space wrap>
          {selectedValues.map(itemKey => (
            <PickedItem
              key={itemKey}
              label={ingredientTranslations[itemKey] || itemKey}
              onClose={() => handleRemove(itemKey)}
            />
          ))}
        </Space>
      </div>
    </div>
  );
};

export default AllergensStep;