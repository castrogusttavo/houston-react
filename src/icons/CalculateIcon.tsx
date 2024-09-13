import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalculateIcon({ iconName = 'calculate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
