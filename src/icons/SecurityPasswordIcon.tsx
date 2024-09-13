import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityPasswordIcon({
  iconName = 'security-password',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
