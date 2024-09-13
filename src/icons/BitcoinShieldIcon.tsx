import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinShieldIcon({
  iconName = 'bitcoin-shield',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
