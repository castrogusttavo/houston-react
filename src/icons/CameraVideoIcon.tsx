import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CameraVideoIcon({
  iconName = 'camera-video',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
