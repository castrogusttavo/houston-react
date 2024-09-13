import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinDatabaseIcon({
  iconName = 'bitcoin-database',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
