import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DrawingCompassIcon({
  iconName = 'drawing-compass',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
