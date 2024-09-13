import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinTargetIcon({
  iconName = 'bitcoin-target',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
