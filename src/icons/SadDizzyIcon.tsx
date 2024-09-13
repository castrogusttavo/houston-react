import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SadDizzyIcon({ iconName = 'sad-dizzy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
