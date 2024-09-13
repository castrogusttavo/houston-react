import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonEclipseIcon({
  iconName = 'moon-eclipse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
