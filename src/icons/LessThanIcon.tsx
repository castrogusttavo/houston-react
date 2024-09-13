import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LessThanIcon({ iconName = 'less-than', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
