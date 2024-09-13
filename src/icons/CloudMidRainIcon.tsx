import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudMidRainIcon({
  iconName = 'cloud-mid-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
