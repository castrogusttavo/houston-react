import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CreditCardChangeIcon({
  iconName = 'credit-card-change',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
