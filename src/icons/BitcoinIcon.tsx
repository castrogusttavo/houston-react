import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinIcon({ iconName = 'bitcoin', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
