import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PathfinderOutlineIcon({
  iconName = 'pathfinder-outline',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
