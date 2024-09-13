import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinTagIcon({
  iconName = 'bitcoin-tag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
