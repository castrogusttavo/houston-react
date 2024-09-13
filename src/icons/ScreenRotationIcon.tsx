import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScreenRotationIcon({
  iconName = 'screen-rotation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
