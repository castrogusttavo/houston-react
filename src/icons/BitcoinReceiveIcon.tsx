import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinReceiveIcon({
  iconName = 'bitcoin-receive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
