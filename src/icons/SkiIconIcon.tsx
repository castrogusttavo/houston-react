import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkiIconIcon({ iconName = 'ski-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
