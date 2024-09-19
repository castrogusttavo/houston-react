import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCheckIconIcon({ iconName = 'text-check-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
