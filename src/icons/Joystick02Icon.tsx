import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Joystick02Icon({
  iconName = 'joystick-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
