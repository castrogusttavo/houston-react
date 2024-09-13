import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeOffIcon({
  iconName = 'volume-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
