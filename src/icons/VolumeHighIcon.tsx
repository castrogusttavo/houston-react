import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeHighIcon({
  iconName = 'volume-high',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
