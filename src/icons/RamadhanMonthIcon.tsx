import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RamadhanMonthIcon({
  iconName = 'ramadhan-month',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
