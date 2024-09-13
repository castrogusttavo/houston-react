import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinWalletIcon({
  iconName = 'bitcoin-wallet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
