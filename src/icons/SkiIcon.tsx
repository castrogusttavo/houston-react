import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkiIcon({ iconName = 'ski-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
