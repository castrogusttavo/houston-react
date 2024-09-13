import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirdropIcon({ iconName = 'airdrop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
