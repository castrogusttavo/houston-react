import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeLowIcon({
  iconName = 'volume-low',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
