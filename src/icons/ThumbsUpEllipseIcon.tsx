import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThumbsUpEllipseIcon({
  iconName = 'thumbs-up-ellipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
