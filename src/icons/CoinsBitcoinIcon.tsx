import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoinsBitcoinIcon({
  iconName = 'coins-bitcoin',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
