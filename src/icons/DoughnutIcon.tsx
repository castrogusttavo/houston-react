import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DoughnutIcon({ iconName = 'doughnut', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
