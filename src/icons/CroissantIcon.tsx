import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CroissantIcon({ iconName = 'croissant', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
