import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeadsetOffIcon({
  iconName = 'headset-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
