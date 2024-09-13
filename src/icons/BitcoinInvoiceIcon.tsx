import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinInvoiceIcon({
  iconName = 'bitcoin-invoice',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
