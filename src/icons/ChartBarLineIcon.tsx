import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartBarLineIcon({
  iconName = 'chart-bar-line',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
