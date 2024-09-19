import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuotesIconIcon({ iconName = 'quotes-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
