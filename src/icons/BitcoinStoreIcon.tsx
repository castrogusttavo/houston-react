import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinStoreIcon({
  iconName = 'bitcoin-store',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
