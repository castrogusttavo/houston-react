import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebflowEllipseIcon({
  iconName = 'webflow-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
