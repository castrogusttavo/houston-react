import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RoadWaysideIcon({
  iconName = 'road-wayside',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
