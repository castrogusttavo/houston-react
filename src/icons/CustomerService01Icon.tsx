import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CustomerService01Icon({
  iconName = 'customer-service-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
