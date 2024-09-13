import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PathfinderIntersectIcon({
  iconName = 'pathfinder-intersect',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
