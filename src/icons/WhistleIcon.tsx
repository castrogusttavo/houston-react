import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WhistleIcon({ iconName = 'whistle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
