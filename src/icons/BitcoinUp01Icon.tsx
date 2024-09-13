import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinUp01Icon({
  iconName = 'bitcoin-up-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
