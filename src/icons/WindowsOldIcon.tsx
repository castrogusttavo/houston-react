import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindowsOldIcon({
  iconName = 'windows-old',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
