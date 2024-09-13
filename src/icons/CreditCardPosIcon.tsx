import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CreditCardPosIcon({
  iconName = 'credit-card-pos',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
