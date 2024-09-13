import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirewallIcon({ iconName = 'firewall', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
