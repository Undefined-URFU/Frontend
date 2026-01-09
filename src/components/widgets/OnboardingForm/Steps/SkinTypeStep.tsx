import {useContext} from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";
import RadioGroup from "components/ui/Inputs/RadioGroup/RadioGroup.tsx";
import {skinOptions} from "constants/skinOption.ts";
import cn from "utils/cn.ts";


const SkinTypeStep = () => {
  const {values, onChange, errors} = useContext(onboardingContext)
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <RadioGroup
        value={values.skinType}
        options={skinOptions}
        onCheck={onChange}
        name='skinType'
      />

      {errors.skinType && (
        <span className={cn('text__red', 'text__regular__s', 'text__400')}>
          {errors.skinType}
        </span>
      )}
    </div>
  );

};

export default SkinTypeStep;