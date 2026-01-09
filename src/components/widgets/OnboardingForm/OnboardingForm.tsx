import ProgressBar from "components/ui/ProgressBar/ProgressBar";
import StepLayout from "components/layouts/StepLayout/StepLayout";
import OnboardingContext from "components/widgets/OnboardingForm/onboarding.context.ts";
import useOnboardingFormCtrl from "components/widgets/OnboardingForm/useOnboardingFormCtrl.ts";
import SkinTypeStep from "components/widgets/OnboardingForm/Steps/SkinTypeStep.tsx";
import s from './onboarding.module.scss'
import Button from "components/ui/Buttons/Button";
import AllergensStep from "components/widgets/OnboardingForm/Steps/AllergensStep.tsx";

const OnboardingForm = () => {
  const ctrl = useOnboardingFormCtrl()

  const renderStepContent = () => {
    switch (ctrl.step) {
      case 1:
        return (
          <StepLayout title="Какой у вас тип кожи?">
            <SkinTypeStep/>
            <Button theme='primary' type='button' onClick={ctrl.handleNextStep}>Далее</Button>
          </StepLayout>
        );
      case 2:
        return (
          <StepLayout title="На что у вас есть аллергия?">
            <AllergensStep/>
            <div className={s.actions}>
              <Button theme='primary' type='submit'>Готово</Button>
              <Button theme='blue' type='button' onClick={ctrl.handlePreviousStep}>Назад</Button>
            </div>
          </StepLayout>
        );
      default:
        return null;
    }
  };

  return (
    <form className={s.container} onSubmit={ctrl.handleSubmit}>
      <ProgressBar stepsCount={2} currentStep={ctrl.step}/>
      <OnboardingContext value={{
        values: ctrl.questionnaire,
        onChange: ctrl.handleChange,
        errors: ctrl.errors,
      }}>
        {renderStepContent()}
      </OnboardingContext>
    </form>
  );
};

export default OnboardingForm;