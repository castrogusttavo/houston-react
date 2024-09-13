import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonSlowWindIcon({
  iconName = 'moon-slow-wind',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
