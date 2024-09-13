import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Invoice01Icon({
  iconName = 'invoice-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
