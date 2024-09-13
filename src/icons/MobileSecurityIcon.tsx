import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MobileSecurityIcon({
  iconName = 'mobile-security',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
