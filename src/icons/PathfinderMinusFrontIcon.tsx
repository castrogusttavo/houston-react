import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PathfinderMinusFrontIcon({
  iconName = 'pathfinder-minus-front',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
