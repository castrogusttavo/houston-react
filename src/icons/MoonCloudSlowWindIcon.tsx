import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonCloudSlowWindIcon({
  iconName = 'moon-cloud-slow-wind',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
