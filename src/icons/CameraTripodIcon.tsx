import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CameraTripodIcon({
  iconName = 'camera-tripod',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
