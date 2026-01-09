import {CSSProperties, PropsWithChildren, useContext} from 'react'
import ValidationContext from 'components/wrapper/Validation/ValidationContext'
import {DatePickerProps, DatePicker, ConfigProvider} from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import cn from 'utils/cn.ts'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import timeUtils from 'utils/time.utils.ts'

export interface IDateProps {
  style?: CSSProperties
  value?: Date
  name: string
  onChange: (val: Date, name: string) => void
  className?: string
  placeholder?: string
  label?: string
  serverError?: string
  error?: boolean
  errorText?: string
  allowClear?: boolean
  showTime?: boolean
  minDate?: Date
  maxDate?: Date
}

const DateInput = ({
  onChange,
  value,
  children,
  className,
  style,
  serverError,
  placeholder,
  showTime = false,
  minDate = new Date(1900, 0, 1),
  maxDate = new Date(2100, 0, 1),
  ...props
}: PropsWithChildren<IDateProps>) => {
  const context = useContext(ValidationContext)
  const error = context.errors[props.name]?.message || props.error
  const isError = Boolean(error || serverError)
  dayjs.extend(customParseFormat)

  const handleChange: DatePickerProps['onChange'] = (_, dateString) => {
    if (showTime) {
      onChange(timeUtils.stringInTime(dateString as string), props.name)
    } else {
      onChange(timeUtils.stringInDate(dateString as string), props.name)
    }
  }

  const formattedValue =
    value && showTime
      ? dayjs(timeUtils.timeInString(value), timeUtils.timeFormat)
      : value && !showTime
        ? dayjs(timeUtils.dateInString(value), timeUtils.dateFormat)
        : undefined

  return (
    <div className="inputWrapper" style={style}>
      {children}
      <ConfigProvider locale={ru_RU}>
        <DatePicker
          showTime={showTime}
          format={showTime ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD'}
          className={className ?? 'textInput'}
          minuteStep={5}
          showNow={false}
          placeholder={placeholder}
          onChange={handleChange}
          value={formattedValue}
          suffixIcon={<></>}
          allowClear={true}
          needConfirm={false}
          status={isError ? 'error' : ''}
          minDate={dayjs(minDate)}
          maxDate={dayjs(maxDate)}
          {...props}
        />
      </ConfigProvider>
      {isError && (
        <span className={cn('text--error', 'text--body-xs', 'text-400')}>{error}</span>
      )}
    </div>
  )
}

export default DateInput
