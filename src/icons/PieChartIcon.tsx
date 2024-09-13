import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PieChartIcon({ iconName = 'pie-chart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
