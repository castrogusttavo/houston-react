import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HologramIcon({ iconName = 'hologram', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
