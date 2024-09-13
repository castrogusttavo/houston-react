import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThumbsUpRectangleIcon({
  iconName = 'thumbs-up-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
