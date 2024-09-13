import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HumidityIcon({ iconName = 'humidity', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
