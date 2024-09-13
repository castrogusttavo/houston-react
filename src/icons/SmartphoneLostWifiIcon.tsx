import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmartphoneLostWifiIcon({
  iconName = 'smartphone-lost-wifi',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
