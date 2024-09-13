import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InstagramIcon({ iconName = 'instagram', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
