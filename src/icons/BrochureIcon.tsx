import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrochureIcon({ iconName = 'brochure', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
