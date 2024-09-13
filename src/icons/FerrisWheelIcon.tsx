import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FerrisWheelIcon({
  iconName = 'ferris-wheel',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
