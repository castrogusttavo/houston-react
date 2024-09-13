import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinBagIcon({
  iconName = 'bitcoin-bag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
