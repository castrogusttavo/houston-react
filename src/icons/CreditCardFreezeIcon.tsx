import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CreditCardFreezeIcon({
  iconName = 'credit-card-freeze',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
