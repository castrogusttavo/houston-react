import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HotAirBalloonIcon({
  iconName = 'hot-air-balloon',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
