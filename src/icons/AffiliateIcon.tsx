import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AffiliateIcon({ iconName = 'affiliate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
