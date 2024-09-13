import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Calendar01Icon({
  iconName = 'calendar-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
