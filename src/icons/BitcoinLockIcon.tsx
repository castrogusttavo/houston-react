import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinLockIcon({
  iconName = 'bitcoin-lock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
