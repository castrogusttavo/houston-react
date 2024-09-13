import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PictureInPictureOnIcon({
  iconName = 'picture-in-picture-on',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
