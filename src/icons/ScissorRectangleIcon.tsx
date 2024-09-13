import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScissorRectangleIcon({
  iconName = 'scissor-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
