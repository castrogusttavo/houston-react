import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudBigRainIcon({
  iconName = 'moon-cloud-big-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
