import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SnowIcon({ iconName = 'snow', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
