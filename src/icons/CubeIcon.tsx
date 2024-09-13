import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CubeIcon({ iconName = 'cube', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
