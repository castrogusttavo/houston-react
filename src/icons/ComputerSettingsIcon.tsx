import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerSettingsIcon({
  iconName = 'computer-settings',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
