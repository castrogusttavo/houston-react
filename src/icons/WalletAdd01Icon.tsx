import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WalletAdd01Icon({
  iconName = 'wallet-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
