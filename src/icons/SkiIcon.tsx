import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkiIcon({ iconName = 'ski', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
