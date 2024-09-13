import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ContactIcon({ iconName = 'contact', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
