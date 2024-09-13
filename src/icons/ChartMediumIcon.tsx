import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartMediumIcon({
  iconName = 'chart-medium',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
