import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OrthogonalEdgeIcon({
  iconName = 'orthogonal-edge',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
