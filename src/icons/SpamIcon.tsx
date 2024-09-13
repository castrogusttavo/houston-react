import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpamIcon({ iconName = 'spam', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
