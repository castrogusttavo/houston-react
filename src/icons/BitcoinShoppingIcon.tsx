import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinShoppingIcon({
  iconName = 'bitcoin-shopping',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
