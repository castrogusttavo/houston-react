import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NintendoSwitchIcon({
  iconName = 'nintendo-switch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
