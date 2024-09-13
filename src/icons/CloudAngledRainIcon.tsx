import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudAngledRainIcon({
  iconName = 'cloud-angled-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
