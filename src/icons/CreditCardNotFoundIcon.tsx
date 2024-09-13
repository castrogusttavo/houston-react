import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CreditCardNotFoundIcon({
  iconName = 'credit-card-not-found',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
