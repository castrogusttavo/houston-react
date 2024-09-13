import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MediumIcon({ iconName = 'medium', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
