import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WalletDone01Icon({
  iconName = 'wallet-done-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
