import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinSearchIcon({
  iconName = 'bitcoin-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
