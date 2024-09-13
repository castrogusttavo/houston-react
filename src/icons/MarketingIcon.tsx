import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MarketingIcon({ iconName = 'marketing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
