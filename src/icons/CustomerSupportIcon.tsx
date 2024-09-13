import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CustomerSupportIcon({
  iconName = 'customer-support',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
