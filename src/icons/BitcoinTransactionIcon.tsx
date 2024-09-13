import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinTransactionIcon({
  iconName = 'bitcoin-transaction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
