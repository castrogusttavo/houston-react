import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TimeHalfPassIcon({
  iconName = 'time-half-pass',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
