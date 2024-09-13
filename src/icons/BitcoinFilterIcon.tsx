import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinFilterIcon({
  iconName = 'bitcoin-filter',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
