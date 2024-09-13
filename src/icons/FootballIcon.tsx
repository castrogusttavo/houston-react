import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FootballIcon({ iconName = 'football', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
