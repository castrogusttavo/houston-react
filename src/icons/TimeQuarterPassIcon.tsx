import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TimeQuarterPassIcon({
  iconName = 'time-quarter-pass',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
