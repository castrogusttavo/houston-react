import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TimeQuarterIcon({
  iconName = 'time-quarter',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
