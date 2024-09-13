import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinReceiptIcon({
  iconName = 'bitcoin-receipt',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
