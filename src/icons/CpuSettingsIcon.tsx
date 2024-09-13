import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CpuSettingsIcon({
  iconName = 'cpu-settings',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
