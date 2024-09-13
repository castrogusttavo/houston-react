import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaborIcon({ iconName = 'labor', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
