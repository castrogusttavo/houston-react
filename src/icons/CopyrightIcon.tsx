import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CopyrightIcon({ iconName = 'copyright', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
