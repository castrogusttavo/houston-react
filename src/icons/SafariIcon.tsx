import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SafariIcon({ iconName = 'safari', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
