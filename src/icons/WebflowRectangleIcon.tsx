import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebflowRectangleIcon({
  iconName = 'webflow-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
