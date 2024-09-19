import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FeatherIcon({ iconName = 'feather-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
