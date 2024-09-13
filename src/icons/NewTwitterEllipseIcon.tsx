import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NewTwitterEllipseIcon({
  iconName = 'new-twitter-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
