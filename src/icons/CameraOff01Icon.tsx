import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CameraOff01Icon({
  iconName = 'camera-off-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
