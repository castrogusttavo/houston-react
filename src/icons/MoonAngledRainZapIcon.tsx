import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonAngledRainZapIcon({
  iconName = 'moon-angled-rain-zap',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
