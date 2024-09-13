import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HockeyIcon({ iconName = 'hockey', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
