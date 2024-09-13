import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransactionIcon({
  iconName = 'transaction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
