import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RainIcon({ iconName = 'rain', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
