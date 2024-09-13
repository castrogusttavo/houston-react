import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WalletNotFound01Icon({
  iconName = 'wallet-not-found-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
