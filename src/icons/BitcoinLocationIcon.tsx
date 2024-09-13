import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinLocationIcon({
  iconName = 'bitcoin-location',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
