import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CreditCardDefrostIcon({
  iconName = 'credit-card-defrost',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
