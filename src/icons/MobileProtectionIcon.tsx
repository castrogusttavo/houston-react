import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MobileProtectionIcon({
  iconName = 'mobile-protection',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
