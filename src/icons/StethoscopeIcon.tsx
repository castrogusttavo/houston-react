import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StethoscopeIcon({
  iconName = 'stethoscope',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
