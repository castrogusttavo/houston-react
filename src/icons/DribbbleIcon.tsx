import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DribbbleIcon({ iconName = 'dribbble', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
