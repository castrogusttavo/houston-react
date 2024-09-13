import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudSlowWindIcon({
  iconName = 'cloud-slow-wind',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
