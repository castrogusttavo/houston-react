import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinPiggyBankIcon({
  iconName = 'bitcoin-piggy-bank',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
