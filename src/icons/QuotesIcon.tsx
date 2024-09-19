import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuotesIcon({ iconName = 'quotes', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
