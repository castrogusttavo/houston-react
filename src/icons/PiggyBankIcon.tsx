import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PiggyBankIcon({
  iconName = 'piggy-bank',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
