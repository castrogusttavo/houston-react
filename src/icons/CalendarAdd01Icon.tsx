import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalendarAdd01Icon({
  iconName = 'calendar-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
