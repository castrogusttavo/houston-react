import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalendarLock01Icon({
  iconName = 'calendar-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
