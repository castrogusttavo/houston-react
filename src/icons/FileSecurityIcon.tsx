import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileSecurityIcon({
  iconName = 'file-security',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
