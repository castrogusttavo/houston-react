import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopSettingsIcon({
  iconName = 'laptop-settings',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
