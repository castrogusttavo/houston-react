import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CorporateIcon({ iconName = 'corporate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
