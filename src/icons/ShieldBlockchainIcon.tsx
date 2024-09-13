import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShieldBlockchainIcon({
  iconName = 'shield-blockchain',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
