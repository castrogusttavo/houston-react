import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleLensIcon({ iconName = 'google-lens-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
