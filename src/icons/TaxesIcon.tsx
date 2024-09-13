import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaxesIcon({ iconName = 'taxes', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
