import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudLittleRainIcon({
  iconName = 'moon-cloud-little-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
