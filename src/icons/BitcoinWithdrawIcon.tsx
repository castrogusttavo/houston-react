import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinWithdrawIcon({
  iconName = 'bitcoin-withdraw',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
