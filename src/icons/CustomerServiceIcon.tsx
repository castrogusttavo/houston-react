import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CustomerServiceIcon({
  iconName = 'customer-service',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
