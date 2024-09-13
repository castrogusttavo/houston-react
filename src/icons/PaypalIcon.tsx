import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PaypalIcon({ iconName = 'paypal', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
