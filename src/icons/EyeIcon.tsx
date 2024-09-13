import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EyeIcon({ iconName = 'eye', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
