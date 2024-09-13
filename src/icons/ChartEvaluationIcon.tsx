import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartEvaluationIcon({
  iconName = 'chart-evaluation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
