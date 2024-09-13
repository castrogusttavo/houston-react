import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PaymentSuccess01Icon({
  iconName = 'payment-success-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
