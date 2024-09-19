import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleLensIconIcon({ iconName = 'google-lens-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
