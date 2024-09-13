import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudBigRainIcon({
  iconName = 'cloud-big-rain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
