import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartIncreaseIcon({
  iconName = 'chart-increase',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
