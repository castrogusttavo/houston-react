import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Invoice03Icon({
  iconName = 'invoice-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
