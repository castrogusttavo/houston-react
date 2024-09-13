import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeMinusIcon({
  iconName = 'volume-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
