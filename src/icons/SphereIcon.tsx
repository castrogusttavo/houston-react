import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SphereIcon({ iconName = 'sphere', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
