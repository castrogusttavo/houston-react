import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PathfinderUniteIcon({
  iconName = 'pathfinder-unite',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
