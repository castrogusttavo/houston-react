import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileMusicIcon({
  iconName = 'file-music',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
