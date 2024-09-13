import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NewTwitterRectangleIcon({
  iconName = 'new-twitter-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
