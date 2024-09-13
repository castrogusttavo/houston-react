import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartBreakoutSquareIcon({
  iconName = 'chart-breakout-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
