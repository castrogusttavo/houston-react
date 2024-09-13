import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebSecurityIcon({
  iconName = 'web-security',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
