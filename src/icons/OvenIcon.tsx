import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OvenIcon({ iconName = 'oven', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
