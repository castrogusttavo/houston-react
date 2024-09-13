import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudMidRainIcon({
  iconName = 'moon-cloud-mid-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
