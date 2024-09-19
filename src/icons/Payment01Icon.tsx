import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Payment01Icon({
  iconName = 'payment-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
