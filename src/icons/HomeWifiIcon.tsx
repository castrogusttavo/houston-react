import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HomeWifiIcon({ iconName = 'home-wifi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
