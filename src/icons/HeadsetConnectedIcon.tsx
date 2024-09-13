import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeadsetConnectedIcon({
  iconName = 'headset-connected',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
