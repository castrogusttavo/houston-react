import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaterPoloIcon({
  iconName = 'water-polo',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
