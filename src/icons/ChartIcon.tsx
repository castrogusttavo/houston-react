import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartIcon({ iconName = 'chart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
