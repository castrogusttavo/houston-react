import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebProtectionIcon({
  iconName = 'web-protection',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
