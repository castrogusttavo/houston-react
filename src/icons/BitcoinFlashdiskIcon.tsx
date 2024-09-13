import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinFlashdiskIcon({
  iconName = 'bitcoin-flashdisk',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
