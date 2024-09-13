import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextIcon({ iconName = 'text', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
