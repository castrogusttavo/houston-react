import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalendarBlock01Icon({
  iconName = 'calendar-block-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
