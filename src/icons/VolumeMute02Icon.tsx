import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeMute02Icon({
  iconName = 'volume-mute-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
