import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Store01Icon({ iconName = 'store-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
