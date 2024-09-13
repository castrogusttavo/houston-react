import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WallLampIcon({ iconName = 'wall-lamp', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
