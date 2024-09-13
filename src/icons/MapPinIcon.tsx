import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapPinIcon({ iconName = 'map-pin', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
