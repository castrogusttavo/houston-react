import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdentityCardIconIcon({ iconName = 'identity-card-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
