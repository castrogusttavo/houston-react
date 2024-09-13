import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ToggleOffIcon({
  iconName = 'toggle-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
