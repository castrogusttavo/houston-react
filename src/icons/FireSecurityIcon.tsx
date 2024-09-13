import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FireSecurityIcon({
  iconName = 'fire-security',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
