import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpadesIcon({ iconName = 'spades', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
