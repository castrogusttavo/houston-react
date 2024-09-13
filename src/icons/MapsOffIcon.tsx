import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsOffIcon({ iconName = 'maps-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
