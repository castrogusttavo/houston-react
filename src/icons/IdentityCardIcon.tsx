import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdentityCardIcon({
  iconName = 'identity-card',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
