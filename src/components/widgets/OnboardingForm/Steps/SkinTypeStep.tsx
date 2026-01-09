import {useContext} from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";
import RadioGroup from "components/ui/Inputs/RadioGroup/RadioGroup.tsx";
import {skinOptions} from "constants/skinOption.ts";



const SkinTypeStep = () => {
  const context = useContext(onboardingContext)
  return (
      <RadioGroup
        value={context.values.skinType}
        options={skinOptions}
        onCheck={context.onChange}
        name='skinType'
      />
  );
};

export default SkinTypeStep;