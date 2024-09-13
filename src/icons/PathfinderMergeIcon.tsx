import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PathfinderMergeIcon({
  iconName = 'pathfinder-merge',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
