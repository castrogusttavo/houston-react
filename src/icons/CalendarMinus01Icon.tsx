import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalendarMinus01Icon({
  iconName = 'calendar-minus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
