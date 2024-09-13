import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinCloudIcon({
  iconName = 'bitcoin-cloud',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
