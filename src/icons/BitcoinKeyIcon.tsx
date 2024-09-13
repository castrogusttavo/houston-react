import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinKeyIcon({
  iconName = 'bitcoin-key',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
