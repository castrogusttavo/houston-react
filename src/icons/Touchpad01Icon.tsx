import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Touchpad01Icon({
  iconName = 'touchpad-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
