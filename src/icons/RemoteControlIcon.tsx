import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RemoteControlIcon({
  iconName = 'remote-control',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
