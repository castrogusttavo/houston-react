import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartBreakoutCircleIcon({
  iconName = 'chart-breakout-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
