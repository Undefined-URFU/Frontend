import {useContext} from "react";
import onboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";
import RadioGroup from "components/ui/Inputs/RadioGroup/RadioGroup.tsx";

const skinOptions = [
  {
    value: "matte",
    label: "Матовая",
  },
  {
    value: "combine",
    label: "Комбинированная",
  },
  {
    value: "dry",
    label: "Сухая"
  },
  {
    value: "normal",
    label: "Нормальная",
  },
  {
    value: "oily",
    label: "Маслянистая"
  }
]

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