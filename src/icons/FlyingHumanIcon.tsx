import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlyingHumanIcon({ iconName = 'flying-human-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
