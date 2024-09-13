import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WazeIcon({ iconName = 'waze', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
