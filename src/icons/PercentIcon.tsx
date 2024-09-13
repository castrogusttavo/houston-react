import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PercentIcon({ iconName = 'percent', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
