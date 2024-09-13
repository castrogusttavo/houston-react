import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinCreditCardIcon({
  iconName = 'bitcoin-credit-card',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
