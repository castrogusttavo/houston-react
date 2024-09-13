import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PhysicsIcon({ iconName = 'physics', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
