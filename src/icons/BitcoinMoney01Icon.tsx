import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinMoney01Icon({
  iconName = 'bitcoin-money-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
