import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InvoiceIcon({ iconName = 'invoice', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
