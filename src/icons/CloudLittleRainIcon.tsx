import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudLittleRainIcon({
  iconName = 'cloud-little-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
