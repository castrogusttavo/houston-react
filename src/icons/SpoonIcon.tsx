import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpoonIcon({ iconName = 'spoon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
