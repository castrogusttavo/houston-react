import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCheckIcon({ iconName = 'text-check-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
