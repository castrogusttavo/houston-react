import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LatitudeIcon({ iconName = 'latitude', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
