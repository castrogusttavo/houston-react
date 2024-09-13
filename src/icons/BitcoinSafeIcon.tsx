import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinSafeIcon({
  iconName = 'bitcoin-safe',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
