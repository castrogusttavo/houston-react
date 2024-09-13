import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartColumnIcon({
  iconName = 'chart-column',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
