import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CameraAdd01Icon({
  iconName = 'camera-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
