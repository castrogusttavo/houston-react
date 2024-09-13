import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinDown01Icon({
  iconName = 'bitcoin-down-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
