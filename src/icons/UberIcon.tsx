import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UberIcon({ iconName = 'uber', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
