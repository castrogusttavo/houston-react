import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScreenLockRotationIcon({
  iconName = 'screen-lock-rotation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
