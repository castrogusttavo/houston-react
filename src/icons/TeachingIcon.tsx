import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TeachingIcon({ iconName = 'teaching', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
