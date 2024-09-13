import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TabletConnectedWifiIcon({
  iconName = 'tablet-connected-wifi',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
