import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThumbsDownEllipseIcon({
  iconName = 'thumbs-down-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
